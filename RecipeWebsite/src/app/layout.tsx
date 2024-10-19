import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "../app/loading";
import { ThemeProvider } from "@/components/theme-provider"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Website",
  description: "This website provides recipes of different type of cuisine and food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      
      <body className={inter.className}>
      
            
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
          </ThemeProvider>
        
        </body>
        
    </html>
  );
}
