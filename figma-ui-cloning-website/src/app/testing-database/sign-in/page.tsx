'use client';
import { Auth_Data } from "@/context/login/context"; // Ensure this path is correct
import Link from "next/link";
import { useContext, useState } from "react";

export default function TestingDatabase() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const contextdata = useContext(Auth_Data); // Ensure your context provides `isLogin` and `update` methods

  const handleSubmit = async (formData: FormData) => {
    try {
      const { email, password } = Object.fromEntries(formData.entries());

      // Fetch data from your API with query parameters (email & password)
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user-database?email=${email}&password=${password}`);

      if (!fetchData.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await fetchData.json();

        // If email and password match, update context
        if (email === data.user.email && password === data.user.password) {
          contextdata?.update({ isLogin: true });
        } else {
          setError('Invalid email or password');
        }
      
    } catch (error) {
      setError('Error: ' + error.message); // Capture the error message
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        handleSubmit(new FormData(e.target)); 
      }} className="space-y-4">
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Write an email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Write a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Login
        </button>
        <Link
          className="ml-10 inline-flex items-center px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
          href={"/testing-database/sign-up"}
        >
          Sign Up
        </Link>
      </form>

      {contextdata?.isLogin === true ? <p>Already logged in</p> : <p>Not logged in</p>}
      
      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error message if any */}
    </div>
  );
}
