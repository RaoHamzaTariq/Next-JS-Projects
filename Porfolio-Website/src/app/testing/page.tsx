'use client'
import { useState } from 'react';
import { set } from 'sanity';
import { json } from 'stream/consumers';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [mode, setMode] = useState('machine learning');
  const [cleanedFileUrl, setCleanedFileUrl] = useState<string | null>(null);
  const [explain, setExplain] = useState(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setMessage('');
      setCleanedFileUrl(null); // Reset the cleaned file URL when a new file is selected
    }
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value);
  };

  const handleUpload = async () => {
    setLoading(true);

    try {
      if (!file) throw new Error('Please select a file');
      if (!apiKey) throw new Error('Please provide an API key');

      // Send request to Next.js API route
      const formData = new FormData();
      formData.append('file', file);
      formData.append('mode', mode);
      formData.append('api_key', apiKey);

      const responseexplain = await fetch('/api/testing?query=analyze', {
        method: 'POST',
        body: formData,
      });
      const responsefile = await fetch('/api/testing?query=file', {
        method: 'POST',
        body: formData,
      });
      
      const explainData = await responseexplain.json()

      if (!responseexplain.ok) throw new Error(`HTTP error! status: ${responseexplain.status}`);
      setExplain(explainData.text)
      if (!responsefile.ok) throw new Error(`HTTP error! status: ${responsefile.status}`);

      // Get the URL of the cleaned file
      const blob = await responsefile.blob();
      const url = window.URL.createObjectURL(blob);
      setCleanedFileUrl(url);
      setMessage('File uploaded and processed successfully!');
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setMessage(`Error occurred while processing your request. Please check your input.`);
    } finally {
      setLoading(false);
    }
    console.log(explain)
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

  return (
    <div className='pt-40'>
      <h1>Upload CSV or XLSX File</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="file" onChange={handleFileChange} accept=".csv,.xlsx" />
        <input type="text" placeholder="API Key" value={apiKey} onChange={handleApiKeyChange} required />
        <select value={mode} onChange={handleModeChange}>
          <option value="normal">Normal</option>
          <option value="machine learning">Machine Learning</option>
        </select>
        <button type="button" onClick={handleUpload} disabled={loading}>
          Upload & Process File {loading && <span>(Processing...)</span>}
        </button>
        {cleanedFileUrl && (
          <button type="button" onClick={handleDownload}>
            Download Cleaned File
          </button>
        )}
      </form>
      <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>
      <p>{explain && explain.result && explain.result.text}</p>
    </div>
  );
}