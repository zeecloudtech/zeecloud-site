import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeeCloud Technologies Inc.",
  description: "AI Innovation | Cloud Systems | Logistics Intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800">
  {/* NAVBAR */}
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <nav className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-3 text-sm font-medium text-slate-700">
      <a href="/about">About</a>
      <a href="/divisions">Divisions</a>
      <a href="/projects">Projects</a>
      <a href="/insights">Insights</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  {/* PAGE CONTENT */}
  {children}
</body>

    </html>
  );
}
