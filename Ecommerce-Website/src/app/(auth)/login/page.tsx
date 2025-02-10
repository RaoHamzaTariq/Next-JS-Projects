// src/components/LoginForm.tsx
'use client';

import { Button } from "@/components/ui/button";
import { signInWithGithub, signInWithGoogle, logInWithEmail } from "@/utils/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create FormData object to pass to logInWithEmail
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await logInWithEmail(formData);

    if (response.error) {
      setError(response.error);
      setMessage(null);
      console.log(response.error); // Log the error for debugging
    } else {
      setMessage(response.success);
      setError(null);
      // Redirect to home page after successful login
      router.push('/');
    }
  };

  const handleGoogleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await signInWithGoogle();

    if (response.error) {
      console.error('Google Sign In Error:', response.error);
      // Handle the error (e.g., show a notification)
    } else {
      console.log('Google Sign In Successful:', response.data);
      router.push('/');
    }
  };

  const handleGithubSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await signInWithGithub();

    if (response.error) {
      console.error('GitHub Sign In Error:', response.error);
      // Handle the error (e.g., show a notification)
    } else {
      console.log('GitHub Sign In Successful:', response.data);
      router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
          />
        </div>

        {/* Error and Success Messages */}
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {message && <p className="text-green-600 mt-2">{message}</p>}

        {/* Login Button */}
        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
          Login
        </Button>

        {/* Separator */}
        <p className="mt-5 w-full flex justify-center">{"--------or--------"}</p>

        {/* Social Login Buttons */}
        <Button onClick={handleGoogleSignIn} type="button" className="w-full mt-5 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-blue-500">
          Sign in with Google
        </Button>
        
        <Button onClick={handleGithubSignIn} type="button" className="w-full mt-5 bg-black text-white py-2 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-500">
          Sign in with GitHub
        </Button>

        {/* Signup Link */}
        <p className="mt-4 text-sm">
          {"Don't have an account?"}
          <Link className="text-blue-600 hover:underline" href="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
