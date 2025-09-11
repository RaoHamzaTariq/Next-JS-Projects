import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import OfferModal from "@/components/OfferModel";


export const metadata: Metadata = {
  title: "Rao Hamza Tariq",
  description: "This my Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <OfferModal />

        <Navbar/>
        {children}
    
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
