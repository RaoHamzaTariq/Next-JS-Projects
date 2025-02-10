'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Download, FileUp, Wand2, ClipboardList } from 'lucide-react';
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
    [key: string]: { [key: string]: number };
  };
  outlier_count: { [key: string]: number };
  feature_cardinality: { [key: string]: number };
}

interface AnalysisResult {
  result: {
    summary_data: SummaryData;
    text: string;
  };
}


interface CleaningSteps {
    cleaning_steps: string[];
    text: string;
  }

interface FileInfo {
    path: string;
    status_code: number;
    filename: string;
    media_type: string;
    background: null; // Or possibly a more specific type if it's not always null
    raw_headers: [string, string][]; // Tuple of strings for headers
    _headers: { [key: string]: string }; // Index signature for headers
    stat_result: null; // Or a more specific type if it's not always null
  }

interface DataCleaningResult {
    explanation: CleaningSteps;
    file: FileInfo
}




export default function DataCleanerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'upload' | 'processing' | 'cleaned'>('upload');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [cleaningResult, setCleaningResult] = useState<DataCleaningResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const analyzeData = async () => {
    if (!file || !apiKey) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);

    try {
        const API_URL = process.env.NEXT_PUBLIC_URL || undefined
      const response = await fetch(`${API_URL}/api/data-cleaner?query=analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data: AnalysisResult = await response.json();
      setAnalysisResult(data);
      setStep('processing');
    } catch (error) {
      setError("Failed to analyze data");
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  const handleCleanData = async (mode: 'normal' | 'ml') => {
    if (!file || !apiKey) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);
    formData.append('mode', mode);

    try {
        const API_URL = process.env.NEXT_PUBLIC_URL || undefined
        const response = await fetch(`${API_URL}/api/datacleaner?query=clean`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data: DataCleaningResult = await response.json();
      setCleaningResult(data);
      setStep('cleaned');
    } catch (error) {
        console.log(error)
      setError("Failed to clean data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!cleaningResult) return;

    try {
      const response = await fetch("dfsdfdfsd");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = cleaningResult.file.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
        console.log(error)
      setError('Failed to download file:');
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
          {analysisResult && Object.entries(analysisResult.result.summary_data.data_types).map(([col, type]) => (
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
      {analysisResult && Object.entries(analysisResult.result.summary_data.numeric_summary).map(([col, stats]) => (
        <Card key={col} className="mb-4">
          <CardHeader>
            <CardTitle>{col}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <StatCard title="Mean" value={stats.mean.toFixed(2)} />
            <StatCard title="Std Dev" value={stats.std.toFixed(2)} />
            <StatCard title="Min/Max" value={`${stats.min} / ${stats.max}`} />
            <StatCard title="25%" value={stats["25%"].toFixed(2)} />
            <StatCard title="50%" value={stats["50%"].toFixed(2)} />
            <StatCard title="75%" value={stats["75%"].toFixed(2)} />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCategoricalSummary = () => (
    <div className="space-y-4">
      <h3 className="font-semibold">Categorical Columns Summary</h3>
      {analysisResult && Object.entries(analysisResult.result.summary_data.categorical_summary).map(([col, stats]) => (
        <Card key={col} className="mb-4">
          <CardHeader>
            <CardTitle>{col}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Unique Values: {stats.unique_count}</p>
            <p>Most Frequent: {stats.most_frequent_value}</p>
            <p>Top Categories:</p>
            <ul className="list-disc pl-6">
              {Object.entries(stats.top_categories).map(([cat, count]) => (
                <li key={cat}>{cat}: {count}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Data Summary & Cleaning Agent</h1>
          <p className="text-muted-foreground mt-2">
            Upload your dataset and get AI-powered cleaning suggestions
          </p>
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
                <Input
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>

              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".csv,.xlsx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="gap-2"
                >
                  <FileUp className="h-4 w-4" />
                  {file ? file.name : 'Select CSV/XLSX File'}
                </Button>
                {file && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                )}
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
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <p className="text-muted-foreground">{analysisResult.result.text}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-4 gap-4">
                <StatCard title="Total Rows" value={analysisResult.result.summary_data.shape.rows} />
                <StatCard title="Total Columns" value={analysisResult.result.summary_data.shape.columns} />
                <StatCard title="Duplicate Rows" value={analysisResult.result.summary_data.duplicate_rows} />
                <StatCard 
                  title="Missing Values" 
                  value={Object.values(analysisResult.result.summary_data.missing_values).reduce((a, b) => a + b, 0)}
                />
              </div>

              {renderDataTypes()}
              {renderNumericSummary()}
              {renderCategoricalSummary()}

              <div className="space-y-4">
                <h3 className="font-semibold">Data Cleaning Suggestions</h3>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="whitespace-pre-wrap">{analysisResult.result.text}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button
                className="flex-1 gap-2"
                onClick={() => handleCleanData('normal')}
                disabled={isLoading}
              >
                <ClipboardList className="h-4 w-4" />
                Normal Cleaning
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={() => handleCleanData('ml')}
                variant="secondary"
                disabled={isLoading}
              >
                <Wand2 className="h-4 w-4" />
                ML Preparation
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 'cleaned' && cleaningResult && (
          <Card>
            <CardHeader>
              <CardTitle>Cleaning Process Complete</CardTitle>
              <p className="text-muted-foreground">{cleaningResult.explanation.text}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Applied Cleaning Steps:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {cleaningResult.explanation.cleaning_steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full gap-2"
                onClick={handleDownload}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download {cleaningResult.file.filename}
                  </>
                )}
              </Button>
            </CardFooter>
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