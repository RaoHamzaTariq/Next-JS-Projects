'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, AlertCircle, FileUp, Book, Wand2, EyeOff, Eye } from 'lucide-react';

interface MCQ {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

export default function MCQGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [noOfMcqs, setNoOfMcqs] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [apiKey, setApiKey] = useState<string>("");
  const [temperature, setTemperature] = useState<number>(0.4);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isApiKeyVisible, setIsApiKeyVisible] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("document", file);
    formData.append("no_of_mcqs", noOfMcqs.toString());
    formData.append("difficulty", difficulty);
    formData.append("api_key", apiKey);
    formData.append("temperature", temperature.toString());

    try {
      const res = await fetch("https://raohamzatariq-ai-agents.hf.space/generate_mcqs/", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Backend error: " + res.statusText);
      const data = await res.json();
      setMcqs(data.mcqs);
    } catch (err) {
      console.error(err);
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error occurred'}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-6 pt-20 sm:pt-28 space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10">
            <Book className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary">MCQ Generator</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your document and generate AI-powered multiple choice questions
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileUp className="h-5 w-5" />
              Generate Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>API Key</Label>
              <div className="relative">
                <Input
                  type={isApiKeyVisible ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
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
            </div>

            <div className="space-y-2">
              <Label>Document</Label>
              <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                  id="file-upload"
                />
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Button variant="ghost" onClick={() => document.getElementById('file-upload')?.click()}>
                    {file ? file.name : 'Select Document'}
                  </Button>
                  {file && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Number of MCQs</Label>
                <Input
                  type="number"
                  value={noOfMcqs}
                  onChange={(e) => setNoOfMcqs(Number(e.target.value))}
                  min={1}
                  max={20}
                />
              </div>

              <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Temperature: {temperature}</Label>
              <Slider
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full gap-2" 
              onClick={handleSubmit} 
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              {loading ? 'Generating...' : 'Generate MCQs'}
            </Button>
          </CardFooter>
        </Card>

        {mcqs.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Generated Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] rounded-md">
                <div className="space-y-6">
                  {mcqs.map((mcq, idx) => (
                    <div key={idx} className="space-y-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex gap-2">
                        <span className="font-bold text-primary">{idx + 1}.</span>
                        <p className="font-medium">{mcq.question}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
                        {[mcq.option1, mcq.option2, mcq.option3, mcq.option4].map((option, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-sm">{i + 1}</span>
                            </div>
                            <p>{option}</p>
                          </div>
                        ))}
                      </div>
                      <p className="pl-6 text-sm text-primary font-medium">
                        Answer: Option {mcq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
