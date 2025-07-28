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

export const metadata: Metadata = {
  title: "Bemaxo",
  description: "Bemaxo - The Future of Social Networking. Connect, share, and explore.",
  openGraph: {
    title: "Bemaxo - Social Media Platform",
    description: "Create an account or log into Bemaxo. Connect with people, share updates, and engage.",
    url: "https://bemaxo.com",
    siteName: "Bemaxo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}