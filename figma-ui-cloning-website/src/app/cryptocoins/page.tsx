"use client";

import { useEffect, useState } from "react";

interface Data {
  [key: string]: number;
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_COINLAYER_API_KEY;
      try {
        const response = await fetch(
          `http://api.coinlayer.com/live?access_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.rates);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10">Error: {error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-6 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          🌐 Cryptocurrency Rates
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl overflow-hidden">
            <thead>
              <tr className="text-white">
                <th className="px-6 py-3 border-b border-gray-500 text-left text-2xl font-semibold">
                  Currency
                </th>
                <th className="px-6 py-3 border-b border-gray-500 text-left text-2xl font-semibold">
                  Rate (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr
                  key={key}
                  className="hover:bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 transition-all duration-300 ease-in-out"
                >
                  <td className="px-6 py-4 text-white text-xl font-medium border-b border-gray-600">
                    {key}
                  </td>
                  <td className="px-6 py-4 text-white text-xl font-medium border-b border-gray-600">
                    <span className="bg-gray-900/50 px-2 py-1 rounded-md shadow-md">
                      ${value.toFixed(4)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
