import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Bemaxo",
  description:
    "Bemaxo - The Future of Social Networking. Connect, share, and explore. Join now for a seamless experience!",
  keywords: [
    "Bemaxo social networking",
    "next-gen social media",
    "Bemaxo community",
    "social media innovation",
    "Bemaxo user engagement",
    "future of social networking",
    "secure social connections",
    "AI-powered social platform",
    "Bemaxo privacy-focused",
    "next-gen content sharing",
    "social discovery network",
    "Bemaxo digital identity",
    "seamless social experience",
    "Bemaxo interactive features",
    "social media for creators",
    "engagement-driven platform",
    "Bemaxo smart algorithms",
    "modern social ecosystem",
  ],

  authors: [{ name: "Bemaxo" }],
  openGraph: {
    title: "Bemaxo - Social Media Platform",
    description:
      "Create an account or log into Bemaxo. Connect with people, share updates, and engage.",
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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bemaxo",
              url: "https://bemaxo.com",
              description: "Join Bemaxo to connect, share and explore the online world.",
              sameAs: ["https://x.com/bemaxoapp"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
