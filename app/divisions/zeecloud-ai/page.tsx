'use client';

import Link from 'next/link';

export default function ZeeCloudAI() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold text-slate-500 tracking-tight uppercase">
            ZeeCloud Technologies • Division
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            R&D in data and artificial intelligence.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-600">
            ZeeCloud AI focuses on developing applied AI solutions across logistics,
            cloud systems, and enterprise operations. We explore real-world problems 
            and build scalable, production-ready intelligence.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Request a consultation
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Applied AI for real operations.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Early-stage copy. We’ll replace this as projects launch.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">Predictive modeling</h3>
              <p className="mt-2 text-sm text-slate-600">
                Building models for forecasting, planning, and operations optimization.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">Real-time intelligence</h3>
              <p className="mt-2 text-sm text-slate-600">
                Streaming analytics and ML powering dispatch, routing, and resource allocation.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 border border-slate-200 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">Cloud-scale AI systems</h3>
              <p className="mt-2 text-sm text-slate-600">
                Designing distributed, scalable AI workloads across cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
