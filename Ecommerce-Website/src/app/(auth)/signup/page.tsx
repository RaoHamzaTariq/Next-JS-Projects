
'use client';

import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/utils/action";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
      setError("Confirm password should match the password.");
      setMessage(null);
      return;
    }

    // Create FormData object to pass to signUpWithEmail
    const formData = new FormData();
    formData.append('email', email);
    formData.append('fullName', fullName);
    formData.append('password', password);

    const response = await signUpWithEmail(formData);

    if (response.error) {
      setError(response.error);
      setMessage(null);
    } else {
      setMessage(response.success);
      setError(null);
      router.push('/login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
          />
        </div>

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

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            id="confirm-password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-2">{error}</p>}

        {/* Sign Up Button */}
        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
          Sign Up
        </Button>

        {/* Success Message */}
        {message && <p className="text-green-600 mt-2">{message}</p>}

        {/* Link to Login Page */}
        <p className="mt-4 text-sm">
          {"Already have an account?"}
          <Link className="text-blue-600 hover:underline" href="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
