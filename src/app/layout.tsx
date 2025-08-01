import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HashtagProvider } from '@/contexts/HashtagContext';



const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>

        <HashtagProvider>
          <div className="bg-white dark:bg-black transition-colors min-h-screen">
            <div className="fixed top-4 right-4 z-50">
            </div>
            {children}
          </div>
        </HashtagProvider>

      </body>
    </html>
  );
}