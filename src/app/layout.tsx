import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bemaxo",
  description: "Bemaxo - The Future of Social Networking. Connect, share, and explore. Join now for a seamless experience!",
  keywords: [
    "Bemaxo", "Bemaxo.com", "Bemaxo website", "Bemaxo app", "Bemaxo safe",
    "Bemaxo login", "Bemaxo social media", "Bemaxo register", "Bemaxo account",
    "Bemaxo sign up", "Bemaxo official site", "Bemaxo secure", "Bemaxo connect",
    "Bemaxo download", "Bemaxo online", "Bemaxo free", "Bemaxo profile", "Bemaxo network"
  ],
  authors: [{ name: "Bemaxo" }],
  openGraph: {
    title: "Bemaxo - Social Media Platform",
    description: "Create an account or log into Bemaxo. Connect with people, share updates, and engage.",
    url: "https://bemaxo.com",
    siteName: "Bemaxo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bemaxo - Social Media Platform",
    description: "Join Bemaxo today. Sign up or log in to start sharing and connecting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />


        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@type": "Organization",
            "name": "Bemaxo",
            "url": "https://bemaxo.com",
            "description": "Join Bemaxo to connect, share and explore the online world.",
            "sameAs": [
              "https://x.com/bemaxo_",
            ]
          })}
        </script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
