'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Download, FileUp, Wand2, ClipboardList, EyeOff, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';

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
      "25%": number;
      "50%": number;
      "75%": number;
      max: number;
    };
  } | string;
  categorical_summary: {
    [key: string]: {
      unique_count: number;
      most_frequent_value: string;
      top_categories: { [key: string]: number };
    } | string;
  };
  missing_values: string;
  correlation_matrix: {
    [key: string]: { [key: string]: number }
  } | string;
  outlier_count: { [key: string]: number } | string;
  feature_cardinality: { [key: string]: number } | string;
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
    if (!file || !apiKey) return;
    if (!file) setError("Please select a file");
    if (!apiKey) setError('Please provide an Google Gemini API key');

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);

    try {
      const API_URL = process.env.NEXT_PUBLIC_URL || undefined;
      const response = await fetch(`${API_URL}/api/data-cleaner?query=analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze data");
      }

      const data = await response.json();
      console.log('Response data:', data); // Debugging information

      // Clean up the summary_data string and parse it into an object
      const cleanedSummaryData = data.result.summary_data
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/np\.int64\((\d+)\)/g, '$1') // Replace np.int64(2) with 2
        .replace(/nan/g, 'null'); // Replace nan with null

      const parsedSummaryData = JSON.parse(cleanedSummaryData);
      setAnalysisResult({ ...data.result, summary_data: parsedSummaryData });
      console.log('Set analysisResult:', { ...data.result, summary_data: parsedSummaryData }); // Debugging information
      setStep('processing');
    } catch (error) {
      setError('Failed to analyze data');
      console.log('Error:', error); // Debugging information
    } finally {
      setIsLoading(false);
    }
  };

  const handleCleanData = async (mode: 'normal' | 'machine learning') => {
    if (!file || !apiKey) return;
    if (!file) setError("Please select a file");
    if (!apiKey) setError('Please provide an API key');
    setIsLoading(true);

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
      const responseExplain = await fetch(`${API_URL}/api/data-cleaner?query=explain`, {
        method: 'POST',
        body: formData,
      });
      if (!responseExplain.ok) throw new Error(`HTTP error! status: ${responseExplain.status}`);
      if (!responseFile.ok) throw new Error(`HTTP error! status: ${responseFile.status}`);

      // Get the URL of the cleaned file
      const blob = await responseFile.blob();
      const url = window.URL.createObjectURL(blob);
      setCleanedFileUrl(url);

      // Get the explanation of the cleaning process
      const data: DataCleaningResult = await responseExplain.json();
      setCleaningResult(data);

      setStep('cleaned');
    } catch (error) {
      console.log('Error:', error); // Debugging information
      setError('Failed to clean data');
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
                <TableCell className="font-medium">{col}</TableCell>
                <TableCell>{type}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderNumericSummary = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Numeric Columns Summary</h3>
      {analysisResult?.summary_data?.numeric_summary && typeof  analysisResult?.summary_data?.numeric_summary === "object" ? (
        Object.entries(analysisResult.summary_data.numeric_summary).map(([col, stats]) => (
          <Card key={col} className="mb-4">
            <CardHeader>
              <CardTitle>{col}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard title="Mean" value={stats.mean.toFixed(2)} />
              <StatCard title="Std Dev" value={stats.std.toFixed(2)} />
              <StatCard title="Min/Max" value={`${stats.min.toFixed(2)} / ${stats.max.toFixed(2)}`} />
              <StatCard title="25%" value={stats['25%'].toFixed(2)} />
              <StatCard title="50%" value={stats['50%'].toFixed(2)} />
              <StatCard title="75%" value={stats['75%'].toFixed(2)} />
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
              <CardTitle>{col}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {typeof stats === 'string' ? (
                <p>{stats}</p>
              ) : (
                <>
                  <p>Unique Values: {stats.unique_count}</p>
                  <p>Most Frequent: {stats.most_frequent_value}</p>
                  <p>Top Categories:</p>
                  <ul className="list-disc pl-6">
                    {Object.entries(stats.top_categories).map(([cat, count]) => (
                      <li key={cat}>
                        {cat}: {count}
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
      {analysisResult?.summary_data?.missing_values ? (
        <p>{analysisResult.summary_data.missing_values}</p>
      ) : (
        <p>No missing values found</p>
      )}
    </div>
  );

  const renderCorrelationMatrix = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Correlation Matrix</h3>
      {analysisResult?.summary_data?.correlation_matrix ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Column</TableHead>
              {Object.keys(analysisResult.summary_data.correlation_matrix).map((col) => (
                <TableHead key={col}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(analysisResult.summary_data.correlation_matrix).map(([col, correlations]) => (
              <TableRow key={col}>
                <TableCell className="font-medium">{col}</TableCell>
                {((Object.values(correlations) as (number | null | undefined)[]).map((value, index) => (
  <TableCell key={index}>
    {typeof value === "number" ? value.toFixed(2) : "N/A"}
  </TableCell>
))
)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No numeric columns available for correlation analysis</p>
      )}
    </div>
  );

  const renderOutliers = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Outliers</h3>
      {analysisResult?.summary_data?.outlier_count ? (
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
                <TableCell className="font-medium">{col}</TableCell>
                <TableCell>{count}</TableCell>
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
    <div className="min-h-screen pt-20 sm:pt-28 bg-background p-4 sm:p-8 transition-all duration-500">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary dark:text-primary-foreground">Data Summary & Cleaning Agent</h1>
          <p className="text-muted-foreground mt-2">Upload your dataset and get AI-powered cleaning suggestions</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {step === 'upload' && (
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Dataset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>API Key</Label>
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
                    className="absolute right-3 top-2.5 text-muted-foreground"
                  >
                    {isApiKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".csv,.xlsx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="gap-2">
                  <FileUp className="h-4 w-4" />
                  {file ? file.name : 'Select CSV/XLSX File'}
                </Button>
                {file && <p className="text-sm text-muted-foreground mt-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2" onClick={analyzeData} disabled={!file || !apiKey || isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                Analyze Dataset
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 'processing' && analysisResult && (
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <p className="text-muted-foreground">{analysisResult.text}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 gap-2" onClick={() => handleCleanData('normal')} disabled={isLoading}>
                  <ClipboardList className="h-4 w-4" />
                  Normal Cleaning
                </Button>
                <Button className="flex-1 gap-2" onClick={() => handleCleanData('machine learning')} variant="secondary" disabled={isLoading}>
                  <Wand2 className="h-4 w-4" />
                  ML Preparation
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Total Rows" value={analysisResult?.summary_data?.shape?.rows} />
                <StatCard title="Total Columns" value={analysisResult?.summary_data?.shape?.columns} />
                <StatCard title="Duplicate Rows" value={analysisResult?.summary_data?.duplicate_rows} />
                <StatCard
                  title="Missing Values"
                  value={analysisResult?.summary_data?.missing_values || 'No missing values found'}
                />
              </div>

              {renderDataTypes()}
              {renderNumericSummary()}
              {renderCategoricalSummary()}
              {renderCorrelationMatrix()}
              {renderOutliers()}
            </CardContent>
          </Card>
        )}

        {step === 'cleaned' && cleaningResult && (
          <Card>
            <CardHeader>
              <CardTitle>Cleaning Process Complete</CardTitle>
              <p className="text-muted-foreground">{cleaningResult.text}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full gap-2 mb-4" onClick={handleDownload} disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Cleaned File
                  </>
                )}
              </Button>
              <div className="space-y-2">
                <h3 className="font-semibold">Applied Cleaning Steps:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {cleaningResult.cleaning_steps.split("\n").map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const StatCard = ({ title, value }: { title: string; value: string | number }) => (
  <div className="rounded-lg border p-4 text-center">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);