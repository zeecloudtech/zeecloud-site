'use client';

import Link from 'next/link';

export default function Divisions() {
  return (
    <main className="container py-10">
      <section className="card p-6 md:p-8">
        <h1 className="text-2xl font-bold">Our Divisions</h1>
        <p className="mt-2 text-sm text-slate-600 max-w-3xl">
          Zegnet Technologies is organized into three connected divisions that
          work together to bridge AI research and real-world implementation.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Zegnet AI */}
          <div className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300/80 hover:shadow-md">
            <h2 className="text-base font-semibold text-slate-900">Zegnet AI</h2>
            <p className="mt-2 text-sm text-slate-600">
              R&amp;D in data, artificial intelligence, and cloud automation. Focused
              on prototypes, experiments, and applied research.
            </p>
            <p className="mt-4 text-xs text-slate-500 italic">
              Detailed division page coming soon.
            </p>
          </div>

          {/* Logicopilot */}
          <div className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300/80 hover:shadow-md">
            <h2 className="text-base font-semibold text-slate-900">Logicopilot</h2>
            <p className="mt-2 text-sm text-slate-600">
              Smart logistics &amp; fleet optimization platform powered by AI –
              helping dispatch and operations teams run more efficiently.
            </p>
            <Link
              href="/divisions/logicopilot"
              className="mt-4 inline-flex text-sm font-medium text-sky-700 hover:text-sky-900"
            >
              View product page →
            </Link>
          </div>

          {/* Zegnet Cloud Solutions */}
          <div className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300/80 hover:shadow-md">
            <h2 className="text-base font-semibold text-slate-900">Zegnet Cloud Solutions</h2>
            <p className="mt-2 text-sm text-slate-600">
              Consulting and cloud integration services that help organizations
              modernize infrastructure and connect their systems.
            </p>
            <p className="mt-4 text-xs text-slate-500 italic">
              Detailed division page coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
