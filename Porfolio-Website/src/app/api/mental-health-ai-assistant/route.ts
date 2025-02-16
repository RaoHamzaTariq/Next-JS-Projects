import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create FormData
    const formData = new FormData();
    
    // // Add the mental health data as a JSON string
    // const mentalHealthData = {
    //   name: data.name,
    //   age: Number(data.age),
    //   gender: data.gender,
    //   mood: data.mood,
    //   stress_level: Number(data.stress_level),
    //   anxiety_level: Number(data.anxiety_level),
    //   sleep_quality: data.sleep_quality,
    //   negative_thoughts: data.negative_thoughts,
    //   appetite_changes: data.appetite_changes,
    //   energy_levels: data.energy_levels,
    //   recent_stressors: data.recent_stressors,
    //   coping_mechanisms: data.coping_mechanisms,
    //   api_key: data.api_key,
    // };

    // Add data and API key to FormData
    formData.append('name', data.name);
    formData.append('age', data.age);
    formData.append('gender', data.gender);
    formData.append('mood', data.mood);
    formData.append('stress_level', data.stress_level);
    formData.append('anxiety_level', data.anxiety_level);
    formData.append('sleep_quality', data.sleep_quality);
    formData.append('negative_thoughts', data.negative_thoughts);
    formData.append('appetite_changes', data.appetite_changes);
    formData.append('energy_levels', data.energy_levels);
    formData.append('recent_stressors', data.recent_stressors);
    formData.append('coping_mechanisms', data.coping_mechanisms);
    formData.append('api_key', data.api_key);

    const response = await fetch('https://raohamzatariq-ai-agents.hf.space/mental_health_assistant', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to analyze mental health data');
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Mental health analysis error:', error);
    
    // Better error message for debugging
    const errorMessage = error instanceof Error 
      ? `Error: ${error.message}` 
      : 'Failed to process request';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 