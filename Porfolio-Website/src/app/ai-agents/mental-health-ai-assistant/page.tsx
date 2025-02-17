'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, AlertCircle, Loader2, Heart, Sparkles, Moon, Utensils, Smile, SmilePlus, AlertTriangle, Calendar, Flame, Frown, Key, Meh, User, Users2, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface MentalHealthForm {
  name: string;
  age: number;
  gender: string;
  mood: string;
  stress_level: number;
  anxiety_level: number;
  sleep_quality: string;
  negative_thoughts: string;
  appetite_changes: string;
  energy_levels: string;
  recent_stressors: string;
  coping_mechanisms: string;
  api_key: string;
}

interface AnalysisResult {
  analysis: string;
  recommendations: string;
}

export default function MentalHealthAssistant() {
  const [formData, setFormData] = useState<MentalHealthForm>({
    name: '',
    age: 0,
    gender: '',
    mood: '',
    stress_level: 5,
    anxiety_level: 5,
    sleep_quality: '',
    negative_thoughts: '',
    appetite_changes: '',
    energy_levels: '',
    recent_stressors: '',
    coping_mechanisms: '',
    api_key: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form data
    if (!formData.name || !formData.age || !formData.gender || !formData.api_key) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
        const API_URL = process.env.NEXT_PUBLIC_URL || undefined;
        const response = await fetch(`${API_URL}/api/mental-health-ai-assistant`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              age: Number(formData.age),
              gender: formData.gender,
              mood: formData.mood,
              stress_level: Number(formData.stress_level),
              anxiety_level: Number(formData.anxiety_level),
              sleep_quality: formData.sleep_quality,
              negative_thoughts: formData.negative_thoughts,
              appetite_changes: formData.appetite_changes,
              energy_levels: formData.energy_levels,
              recent_stressors: formData.recent_stressors,
              coping_mechanisms: formData.coping_mechanisms,
              api_key: formData.api_key
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to analyze mental health data.');
        }

        setResult(data);
        } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while processing your request');
        } finally {
        setLoading(false);
        }
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto p-6 pt-20 sm:pt-28 space-y-8">
        <div className="text-center space-y-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Mental Health AI Assistant
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get personalized mental health analysis and recommendations from our AI assistant
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mental Health Assessment</CardTitle>
              <CardDescription>
                Please fill out this form honestly for the most accurate analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Name</Label>
                      <div className="relative">
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="pl-8 transition-all duration-200 focus:ring-2 focus:ring-primary"
                        />
                        <User className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Age</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={formData.age || ''}
                          onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                          min={0}
                          required
                          className="pl-8 transition-all duration-200 focus:ring-2 focus:ring-primary"
                        />
                        <Calendar className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Gender</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      >
                        <SelectTrigger className="pl-8 relative transition-all duration-200">
                          <Users2 className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Current Mood</Label>
                      <Select
                        value={formData.mood}
                        onValueChange={(value) => setFormData({ ...formData, mood: value })}
                      >
                        <SelectTrigger className="pl-8 relative transition-all duration-200">
                          <Smile className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                          <SelectValue placeholder="Select mood" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="happy">
                            <div className="flex items-center gap-2">
                              <SmilePlus className="h-4 w-4 text-green-500" />
                              Happy
                            </div>
                          </SelectItem>
                          <SelectItem value="neutral">
                            <div className="flex items-center gap-2">
                              <Meh className="h-4 w-4 text-yellow-500" />
                              Neutral
                            </div>
                          </SelectItem>
                          <SelectItem value="sad">
                            <div className="flex items-center gap-2">
                              <Frown className="h-4 w-4 text-blue-500" />
                              Sad
                            </div>
                          </SelectItem>
                          <SelectItem value="anxious">
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                              Anxious
                            </div>
                          </SelectItem>
                          <SelectItem value="angry">
                            <div className="flex items-center gap-2">
                              <Flame className="h-4 w-4 text-red-500" />
                              Angry
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">Stress Level</Label>
                      <Badge variant="outline">{formData.stress_level}/10</Badge>
                    </div>
                    <Slider
                      value={[formData.stress_level]}
                      onValueChange={(value) => setFormData({ ...formData, stress_level: value[0] })}
                      min={1}
                      max={10}
                      step={1}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">Anxiety Level</Label>
                      <Badge variant="outline">{formData.anxiety_level}/10</Badge>
                    </div>
                    <Slider
                      value={[formData.anxiety_level]}
                      onValueChange={(value) => setFormData({ ...formData, anxiety_level: value[0] })}
                      min={1}
                      max={10}
                      step={1}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Sleep Quality</Label>
                    <Select
                      value={formData.sleep_quality}
                      onValueChange={(value) => setFormData({ ...formData, sleep_quality: value })}
                    >
                      <SelectTrigger className="pl-8 relative transition-all duration-200">
                        <Moon className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                        <SelectValue placeholder="Select sleep quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Negative Thoughts</Label>
                    <Textarea
                      value={formData.negative_thoughts}
                      onChange={(e) => setFormData({ ...formData, negative_thoughts: e.target.value })}
                      placeholder="Describe any negative thoughts you've been experiencing..."
                      className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Appetite Changes</Label>
                    <Select
                      value={formData.appetite_changes}
                      onValueChange={(value) => setFormData({ ...formData, appetite_changes: value })}
                    >
                      <SelectTrigger className="pl-8 relative transition-all duration-200">
                        <Utensils className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                        <SelectValue placeholder="Select appetite changes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="increased">Increased</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="decreased">Decreased</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Energy Levels</Label>
                    <Select
                      value={formData.energy_levels}
                      onValueChange={(value) => setFormData({ ...formData, energy_levels: value })}
                    >
                      <SelectTrigger className="pl-8 relative transition-all duration-200">
                        <Zap className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                        <SelectValue placeholder="Select energy level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Recent Stressors</Label>
                    <Textarea
                      value={formData.recent_stressors}
                      onChange={(e) => setFormData({ ...formData, recent_stressors: e.target.value })}
                      placeholder="Describe any recent stressful events or situations..."
                      className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Current Coping Mechanisms</Label>
                    <Textarea
                      value={formData.coping_mechanisms}
                      onChange={(e) => setFormData({ ...formData, coping_mechanisms: e.target.value })}
                      placeholder="How do you currently cope with stress and anxiety?"
                      className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">API Key</Label>
                    <div className="relative">
                      <Input
                        type="password"
                        value={formData.api_key}
                        onChange={(e) => setFormData({ ...formData, api_key: e.target.value })}
                        placeholder="Enter your API key"
                        required
                        className="pl-8 transition-all duration-200 focus:ring-2 focus:ring-primary"
                      />
                      <Key className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full gap-2 relative overflow-hidden group transition-all duration-300 hover:shadow-lg" 
                onClick={handleSubmit}
                disabled={loading}
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-x-0 transform bg-primary/20 group-hover:scale-x-100" />
                <div className="relative flex items-center gap-2">
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Heart className="h-4 w-4" />
                  )}
                  {loading ? 'Analyzing...' : 'Get Analysis'}
                </div>
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <div className="animate-in fade-in-0 slide-in-from-right-5 duration-500">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Analysis Results
                  </CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="animate-in fade-in-0 duration-300 delay-200">
                      Mood: {formData.mood}
                    </Badge>
                    <Badge variant="outline" className="animate-in fade-in-0 duration-300 delay-300">
                      Stress Level: {formData.stress_level}/10
                    </Badge>
                    <Badge variant="outline" className="animate-in fade-in-0 duration-300 delay-400">
                      Sleep: {formData.sleep_quality}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="analysis" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="analysis">Analysis</TabsTrigger>
                      <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    </TabsList>
                    <TabsContent value="analysis">
                      <ScrollArea className="h-[600px] rounded-md">
                        <div className="p-4 space-y-6">
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Mental Health Overview</h3>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Stress Management</span>
                                  <span className="text-sm">{Math.max(0, 10 - formData.stress_level) * 10}%</span>
                                </div>
                                <Progress value={Math.max(0, 10 - formData.stress_level) * 10} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Anxiety Control</span>
                                  <span className="text-sm">{Math.max(0, 10 - formData.anxiety_level) * 10}%</span>
                                </div>
                                <Progress value={Math.max(0, 10 - formData.anxiety_level) * 10} className="h-2" />
                              </div>
                            </div>
                          </div>
                          <div className="prose dark:prose-invert max-w-none">
                            <ReactMarkdown>{result.analysis}</ReactMarkdown>
                          </div>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    <TabsContent value="recommendations">
                      <ScrollArea className="h-[600px] rounded-md">
                        <div className="p-4 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="p-4">
                              <h3 className="font-semibold mb-2">Immediate Actions</h3>
                              <div className="prose dark:prose-invert max-w-none text-sm">
                                <ReactMarkdown>{result.recommendations.split('\n\n')[0]}</ReactMarkdown>
                              </div>
                            </Card>
                            <Card className="p-4">
                              <h3 className="font-semibold mb-2">Long-term Strategies</h3>
                              <div className="prose dark:prose-invert max-w-none text-sm">
                                <ReactMarkdown>{result.recommendations.split('\n\n')[1] || ''}</ReactMarkdown>
                              </div>
                            </Card>
                          </div>
                          <div className="prose dark:prose-invert max-w-none">
                            <ReactMarkdown>{result.recommendations}</ReactMarkdown>
                          </div>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 