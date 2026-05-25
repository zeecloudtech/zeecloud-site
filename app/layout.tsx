import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zeecloudtech.com'),

  title: {
    default: 'ZeeCloud Technologies – Applied AI for Canadian Enterprise',
    template: '%s · ZeeCloud Technologies',
  },

  description:
    'ZeeCloud Technologies builds applied AI solutions for Canadian enterprise — starting with Logicopilot, an intelligent operations platform for the transportation industry.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'ZeeCloud Technologies',
    description: 'Applied AI for Canadian Enterprise. Cloud-native. Built for Canada.',
    url: '/',
    siteName: 'ZeeCloud Technologies',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'ZeeCloud Technologies' },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZeeCloud Technologies',
    description: 'Applied AI for Canadian Enterprise. Cloud-native. Built for Canada.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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