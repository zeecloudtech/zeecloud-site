import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeeCloud Technologies Inc. — AI, Cloud & Logistics Intelligence",
  description: "From advanced AI systems to cloud integration and IT consulting, ZeeCloud helps organizations unlock efficiency, connectivity, and innovation.",
  openGraph: { title: "ZeeCloud Technologies Inc.", description: "AI Innovation • Cloud Systems • Logistics Intelligence", type: "website" },
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen text-slate-800">{children}</body></html>);
}
