import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://myparentsbenefit.com'),
  title: {
    template: '%s | MyParentsBenefit',
    default: 'MyParentsBenefit - Supporting Families',
  },
  description: 'Comprehensive platform supporting families with resources, guidance, and community connections',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myparentsbenefit.com',
    siteName: 'MyParentsBenefit',
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
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
