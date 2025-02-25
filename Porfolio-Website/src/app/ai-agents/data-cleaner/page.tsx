'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Download, FileUp, Wand2, ClipboardList, EyeOff, Eye, FileText, Copy, Check } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SummaryData {
  columns: string[];
  shape: {
    rows: number;
    columns: number;
  };
  data_types: { [key: string]: string };
  duplicate_rows: number;
  numeric_summary: {
    [key: string]: {
      count: number;
      mean: number;
      std: number;
      min: number;
      '25%': number;
      '50%': number;
      '75%': number;
      max: number;
    };
  };
  categorical_summary: {
    [key: string]: {
      unique_count: number;
      most_frequent_value: string;
      top_categories: { [key: string]: number };
    };
  };
  missing_values: { [key: string]: number };
  correlation_matrix: {
    [key: string]: { [key: string]: number | null };
  };
  outlier_count: { [key: string]: number };
  feature_cardinality: { [key: string]: number };
}

interface AnalysisResult {
  summary_data: SummaryData;
  text: string;
}

interface DataCleaningResult {
  cleaning_steps: string;
  text: string;
}

export default function DataCleanerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'upload' | 'processing' | 'cleaned'>('upload');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [cleaningResult, setCleaningResult] = useState<DataCleaningResult | null>(null);
  const [cleanedFileUrl, setCleanedFileUrl] = useState<string | null>(null);
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const analyzeData = async () => {
    if (!file) {
      setError("Please select a file");
      return;
    }
    if (!apiKey) {
      setError('Please provide a Google Gemini API key');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);

    try {
      const response = await fetch(`/api/data-cleaner?query=analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze data");
      }

      const data = await response.json();
      
      if (!data.result || !data.result.summary_data || !data.result.text) {
        throw new Error("Invalid response format from server");
      }

      try {
        // Parse the summary_data string into an object
        let parsedSummaryData;
        if (typeof data.result.summary_data === 'string') {
          // Replace single quotes with double quotes, except for those within words
          const cleanedString = data.result.summary_data
            .replace(/(?<=\{|,|\[)\s*'/g, '"') // Replace leading single quotes
            .replace(/'\s*(?=\}|\]|,)/g, '"')  // Replace trailing single quotes
            .replace(/:\s*'/g, ':"')           // Replace single quotes after colons
            .replace(/'\s*:/g, '":')           // Replace single quotes before colons
            .replace(/nan/g, 'null')           // Replace nan with null
            .replace(/:\s*None/g, ':null');    // Replace None with null

          parsedSummaryData = JSON.parse(cleanedString);
        } else {
          parsedSummaryData = data.result.summary_data;
        }

        // Ensure numeric values in numeric_summary are properly handled
        if (parsedSummaryData.numeric_summary) {
          Object.entries(parsedSummaryData.numeric_summary).forEach(([key, stats]: [string, any]) => {
            if (typeof stats === 'object') {
              Object.entries(stats).forEach(([statKey, value]) => {
                if (typeof value === 'string' && !isNaN(Number(value))) {
                  stats[statKey] = Number(value);
                }
              });
            }
          });
        }

        // Set the analysis result with the properly parsed data
        setAnalysisResult({
          summary_data: parsedSummaryData,
          text: data.result.text
        });
        
        setStep('processing');
      } catch (parseError) {
        console.error('Error parsing summary data:', parseError);
        throw new Error("Failed to parse analysis results");
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to analyze data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCleanData = async (mode: 'normal' | 'machine learning') => {
    if (!file) {
      setError("Please select a file");
      return;
    }
    if (!apiKey) {
      setError('Please provide an API key');
      return;
    }
    
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);
    formData.append('mode', mode);

    try {
      const API_URL = process.env.NEXT_PUBLIC_URL || undefined;
      const responseFile = await fetch(`${API_URL}/api/data-cleaner?query=file`, {
        method: 'POST',
        body: formData,
      });
      
      if (!responseFile.ok) {
        const errorData = await responseFile.json();
        throw new Error(errorData.error || "Failed to clean data");
      }

      // Get cleaning explanation
      const responseExplain = await fetch(`${API_URL}/api/data-cleaner?query=explain`, {
        method: 'POST',
        body: formData,
      });

      if (!responseExplain.ok) {
        const errorData = await responseExplain.json();
        throw new Error(errorData.error || "Failed to get cleaning explanation");
      }

      // Get the URL of the cleaned file
      const blob = await responseFile.blob();
      const url = window.URL.createObjectURL(blob);
      setCleanedFileUrl(url);

      // Get the explanation of the cleaning process
      const data = await responseExplain.json();
      if (!data.cleaning_steps || !data.text) {
        throw new Error("Invalid response format from server");
      }
      
      setCleaningResult(data);
      setStep('cleaned');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to clean data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (cleanedFileUrl) {
      const a = document.createElement('a');
      a.href = cleanedFileUrl;
      a.download = `cleaned_${file?.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(cleanedFileUrl);
      setCleanedFileUrl(null); // Reset the cleaned file URL after download
    }
  };

  const renderDataTypes = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Data Types</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Column</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {analysisResult?.summary_data?.data_types &&
            Object.entries(analysisResult.summary_data.data_types).map(([col, type]) => (
              <TableRow key={col}>
                <TableCell className="font-medium">{String(col)}</TableCell>
                <TableCell>{String(type)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderNumericSummary = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Numeric Columns Summary</h3>
      {analysisResult?.summary_data?.numeric_summary && typeof analysisResult?.summary_data?.numeric_summary === "object" ? (
        Object.entries(analysisResult.summary_data.numeric_summary).map(([col, stats]) => (
          <Card key={col} className="mb-4">
            <CardHeader>
              <CardTitle>{String(col)}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard title="Mean" value={typeof stats.mean === 'number' ? stats.mean.toFixed(2) : String(stats.mean)} icon={<FileText className="h-4 w-4" />} />
              <StatCard title="Std Dev" value={typeof stats.std === 'number' ? stats.std.toFixed(2) : String(stats.std)} icon={<FileText className="h-4 w-4" />} />
              <StatCard title="Min/Max" value={`${typeof stats.min === 'number' ? stats.min.toFixed(2) : stats.min} / ${typeof stats.max === 'number' ? stats.max.toFixed(2) : stats.max}`} icon={<FileText className="h-4 w-4" />} />
              <StatCard title="25%" value={typeof stats['25%'] === 'number' ? stats['25%'].toFixed(2) : String(stats['25%'])} icon={<FileText className="h-4 w-4" />} />
              <StatCard title="50%" value={typeof stats['50%'] === 'number' ? stats['50%'].toFixed(2) : String(stats['50%'])} icon={<FileText className="h-4 w-4" />} />
              <StatCard title="75%" value={typeof stats['75%'] === 'number' ? stats['75%'].toFixed(2) : String(stats['75%'])} icon={<FileText className="h-4 w-4" />} />
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No numeric columns found</p>
      )}
    </div>
  );

  const renderCategoricalSummary = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Categorical Columns Summary</h3>
      {analysisResult?.summary_data?.categorical_summary && typeof analysisResult.summary_data.categorical_summary === 'object' ? (
        Object.entries(analysisResult.summary_data.categorical_summary).map(([col, stats]) => (
          <Card key={col} className="mb-4">
            <CardHeader>
              <CardTitle>{String(col)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {typeof stats === 'string' ? (
                <p>{stats}</p>
              ) : (
                <>
                  <p>Unique Values: {String(stats.unique_count)}</p>
                  <p>Most Frequent: {String(stats.most_frequent_value)}</p>
                  <p>Top Categories:</p>
                  <ul className="list-disc pl-6">
                    {Object.entries(stats.top_categories).map(([cat, count]) => (
                      <li key={cat}>
                        {String(cat)}: {String(count)}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No categorical columns found</p>
      )}
    </div>
  );

  const renderMissingValues = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Missing Values</h3>
      {analysisResult?.summary_data?.missing_values && Object.keys(analysisResult.summary_data.missing_values).length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Column</TableHead>
              <TableHead>Missing Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(analysisResult.summary_data.missing_values)
              .sort(([, a], [, b]) => b - a) // Sort by percentage in descending order
              .map(([column, percentage]) => (
                <TableRow key={column}>
                  <TableCell className="font-medium">{column}</TableCell>
                  <TableCell>{(percentage * 100).toFixed(2)}%</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <p>No missing values found</p>
      )}
    </div>
  );

  const renderCorrelationMatrix = () => {
    const correlationData = analysisResult?.summary_data?.correlation_matrix;
    
    if (!correlationData || typeof correlationData !== 'object') {
      return (
        <div className="space-y-4">
          <h3 className="font-semibold">Correlation Matrix</h3>
          <p>No numeric columns available for correlation analysis</p>
        </div>
      );
    }

    // Get unique column names
    const columnNames = Object.keys(correlationData);

    return (
      <div className="space-y-4">
        <h3 className="font-semibold">Correlation Matrix</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column</TableHead>
                {columnNames.map((col) => (
                  <TableHead key={col}>{String(col)}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {columnNames.map((rowCol) => (
                <TableRow key={rowCol}>
                  <TableCell className="font-medium">{String(rowCol)}</TableCell>
                  {columnNames.map((colCol) => {
                    const value = correlationData[rowCol]?.[colCol];
                    return (
                      <TableCell key={`${rowCol}-${colCol}`}>
                        {typeof value === 'number' ? value.toFixed(2) : String(value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  const renderOutliers = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Outliers</h3>
      {analysisResult?.summary_data?.outlier_count && typeof analysisResult.summary_data.outlier_count === 'object' ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Column</TableHead>
              <TableHead>Outlier Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(analysisResult.summary_data.outlier_count).map(([col, count]) => (
              <TableRow key={col}>
                <TableCell className="font-medium">{String(col)}</TableCell>
                <TableCell>{String(count)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No outliers found</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto p-6 pt-20 sm:pt-28 space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10">
            <Wand2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary">Data Summary & Cleaning Agent</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your dataset and get AI-powered insights and cleaning suggestions. Supports CSV and Excel files.
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto animate-in fade-in-50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {step === 'upload' && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileUp className="h-5 w-5" />
                Upload Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-base">API Key</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative">
                        <Input
                          type={isApiKeyVisible ? 'text' : 'password'}
                          placeholder="Enter your Google Gemini API key"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setIsApiKeyVisible(!isApiKeyVisible)}
                          className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {isApiKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Required for AI analysis</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".csv,.xlsx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Button variant="ghost" onClick={() => fileInputRef.current?.click()} className="gap-2">
                    {file ? file.name : 'Select CSV/XLSX File'}
                  </Button>
                  {file && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full gap-2" 
                onClick={analyzeData} 
                disabled={!file || !apiKey || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="h-4 w-4" />
                )}
                Analyze Dataset
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 'processing' && analysisResult && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Analysis Results</CardTitle>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Badge variant="secondary" className="cursor-help">
                        Dataset Info
                      </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Dataset Overview</h4>
                        <div className="text-sm text-muted-foreground">
                          <p>Rows: {analysisResult?.summary_data?.shape?.rows}</p>
                          <p>Columns: {analysisResult?.summary_data?.shape?.columns}</p>
                          <p>Duplicates: {analysisResult?.summary_data?.duplicate_rows}</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <p className="text-muted-foreground">{analysisResult.text}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 gap-2" 
                    onClick={() => handleCleanData('normal')} 
                    disabled={isLoading}
                  >
                    <ClipboardList className="h-4 w-4" />
                    Standard Cleaning
                  </Button>
                  <Button 
                    className="flex-1 gap-2" 
                    onClick={() => handleCleanData('machine learning')} 
                    variant="secondary" 
                    disabled={isLoading}
                  >
                    <Wand2 className="h-4 w-4" />
                    ML Preparation
                  </Button>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="numeric">Numeric</TabsTrigger>
                    <TabsTrigger value="categorical">Categorical</TabsTrigger>
                    <TabsTrigger value="correlation">Correlation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard 
                        title="Total Rows" 
                        value={analysisResult?.summary_data?.shape?.rows}
                        icon={<FileText className="h-4 w-4" />}
                      />
                      <StatCard 
                        title="Total Columns" 
                        value={analysisResult?.summary_data?.shape?.columns}
                        icon={<ClipboardList className="h-4 w-4" />}
                      />
                      <StatCard 
                        title="Duplicate Rows" 
                        value={analysisResult?.summary_data?.duplicate_rows}
                        icon={<Copy className="h-4 w-4" />}
                      />
                      <StatCard
                        title="Missing Values"
                        value={Object.keys(analysisResult?.summary_data?.missing_values || {}).length > 0 
                          ? `${Object.keys(analysisResult.summary_data.missing_values).length} values`
                          : 'None'}
                        icon={<AlertCircle className="h-4 w-4" />}
                      />
                    </div>
                    {renderDataTypes()}
                  </TabsContent>

                  <TabsContent value="numeric" className="space-y-4">
                    <ScrollArea className="h-[600px]">
                      {renderNumericSummary()}
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="categorical" className="space-y-4">
                    <ScrollArea className="h-[600px]">
                      {renderCategoricalSummary()}
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="correlation" className="space-y-4">
                    <ScrollArea className="h-[600px]">
                      {renderCorrelationMatrix()}
                      {renderOutliers()}
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 'cleaned' && cleaningResult && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Cleaning Process Complete
              </CardTitle>
              <p className="text-muted-foreground">{cleaningResult.text}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button 
                className="w-full gap-2" 
                onClick={handleDownload} 
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Download Cleaned File
              </Button>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Applied Cleaning Steps
                </h3>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <ul className="space-y-2">
                    {cleaningResult.cleaning_steps.split("\n").map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">
                          {i + 1}
                        </Badge>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const StatCard = ({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-primary/10">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);