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
        {children}
      </body>
    </html>
  );
}
