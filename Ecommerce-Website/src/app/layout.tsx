import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/context/ContextForCart";
import WebsiteUnderProcess from "@/components/WebsiteUnderProcess";
import { SupabaseProvider } from "@/components/context/AuthContext";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Sustainable Shopping for a Greener Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_Sans.className}>
        
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SupabaseProvider>
            <CartProvider>
              <NavBar />
              <main>{children}</main>
              <Footer />
              <Toaster />
              <WebsiteUnderProcess />
            </CartProvider>
            </SupabaseProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
