import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'ZeeCloud Technologies Inc.',
  description:
    'AI innovation, cloud systems, and logistics intelligence. Transforming logistics and enterprise operations through AI and Cloud.',
  icons: { icon: '/favicon.ico' }, // Add /public/favicon.ico if you have it
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
