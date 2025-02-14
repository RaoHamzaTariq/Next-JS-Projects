'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText, Send, Trash2 } from "lucide-react";

export default function Home() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedSessionId = localStorage.getItem('sessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  const handleUpload = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!file || !sessionId) return alert('Please wait, session is initializing');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('session_id', sessionId);

    setUploading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      alert('Document processed successfully');
    } catch (error) {
      alert(error);
    } finally {
      setUploading(false);
    }
  };

  const handleQuestion = async () => {
    if (!question || !sessionId) return alert('Please wait, session is initializing');

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, question }),
      });
      if (!response.ok) throw new Error('Answer request failed');
      const { answer } = await response.json();
      setAnswer(answer);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!sessionId) return alert('Session not initialized');
    setDeleting(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/delete-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      });
      if (!response.ok) throw new Error('Failed to delete document');
      alert('Document deleted successfully');
    } catch (error) {
      alert(error);
    } finally {
      setDeleting(false);
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="container max-w-4xl py-28 mx-auto">
      <Card className="border-2">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-6 h-6" />
              Document Chat Assistant
            </div>
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Upload your document and start asking questions
          </p>
        </CardHeader>
        <Separator />
        <CardContent className="p-6 space-y-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Document Management</h3>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="grid w-full max-w-full items-center gap-4">
                <Input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                  accept=".pdf,.docx,.txt"
                  className="w-full border-2 border-dashed bg-muted/50 hover:bg-muted/80 cursor-pointer"
                />
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={uploading}
                    className="flex-1 h-12"
                    variant="default"
                  >
                    {uploading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <>
                        <FileText className="h-4 w-4 mr-2" />
                        Upload Document
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="h-12"
                    variant="destructive"
                  >
                    {deleting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <Separator />

          {/* Chat Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ask Questions</h3>
            <div className="flex gap-2">
              <Input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about your document..."
                disabled={loading}
                className="flex-1"
              />
              <Button
                onClick={handleQuestion}
                disabled={loading}
                size="icon"
                className="h-10 w-10"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
        {answer && (
          <>
            <Separator />
            <CardFooter className="p-6">
              <ScrollArea className="h-full w-full rounded-md border p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Answer:</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {answer}
                  </p>
                </div>
              </ScrollArea>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}