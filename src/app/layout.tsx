import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ChatBot } from "@/components/ui/ChatBot";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://myparentsbenefit.com'),
  title: "MyParentsBenefit - Comprehensive Family Care Platform",
  description: "Helping families navigate caregiving with comprehensive resources, expert guidance, and community support. Schedule doctor visits, manage prescriptions, and ensure safety for your aging parents.",
  keywords: "family care, elderly care, senior care, caregiver support, parent care, healthcare management",
  authors: [{ name: "MyParentsBenefit Team" }],
  openGraph: {
    title: "MyParentsBenefit - Helping You Help Your Parents",
    description: "Comprehensive caregiving platform for families",
    type: "website",
    locale: "en_US",
    siteName: "MyParentsBenefit",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyParentsBenefit - Family Care Platform",
    description: "Supporting families through their caregiving journey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 antialiased selection:bg-accent-purple/20 selection:text-accent-purple`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
