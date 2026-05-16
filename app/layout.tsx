import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hindSiliguri = Hind_Siliguri({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["bengali"], 
  variable: "--font-hind" 
});

export const metadata: Metadata = {
  title: "ShikhoBD | বাংলাদেশের সেরা লার্নিং প্ল্যাটফর্ম",
  description: "শিখুন দক্ষ মেন্টরদের থেকে, গড়ুন নিজের ক্যারিয়ার। ShikhoBD তে আছে আধুনিক সব কোর্স।",
  openGraph: {
    title: "ShikhoBD | বাংলাদেশের সেরা লার্নিং প্ল্যাটফর্ম",
    description: "শিখুন দক্ষ মেন্টরদের থেকে, গড়ুন নিজের ক্যারিয়ার।",
    url: "https://shikhobd.com",
    siteName: "ShikhoBD",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable}`} suppressHydrationWarning>
      <body className="font-inter bg-white text-gray-900 antialiased" suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
