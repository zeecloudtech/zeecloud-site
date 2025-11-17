import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  // Ensures relative URLs (e.g. /og-image.png) are resolved to full absolute URLs
  metadataBase: new URL('https://lemon-meadow-09e594a0f.3.azurestaticapps.net'),

  // Default <title> and an optional template for subpages later
  title: {
    default: 'ZeeCloud Technologies – AI, Cloud & Logistics Intelligence',
    template: '%s · ZeeCloud Technologies',
  },

  description:
    'We bridge AI research and real-world implementation—helping organizations automate logistics, modernize IT systems, and achieve digital transformation.',

  // Good for SEO; lets search engines know your canonical URL
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Zegnet Technologies',
    description: 'AI innovation, cloud systems, and logistics intelligence.',
    url: '/',
    siteName: 'Zegnet Technologies',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'ZeeCloud Technologies' },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZeeCloud Technologies',
    description: 'AI innovation, cloud systems, and logistics intelligence.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    // Optional if you add one later:
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} text-slate-900 antialiased`}>
        <NavBar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
