'use client';

import Link from 'next/link';

export default function ResearchPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Research
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Applied AI research grounded in real operations.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            We focus on problems where rigorous research meets operational reality:
            routing, dispatch optimization, anomaly detection, forecasting, and human-AI
            collaboration for decision support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Read research notes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore collaboration
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Logistics & routing models
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Research into better assignment, routing, and capacity-planning algorithms
              for fleets and networks.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Time-series & forecasting
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Demand, volume, and utilization forecasting to improve planning and reduce
              variance.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Human-centered AI tooling
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Interfaces and co-pilot experiences that keep dispatchers, planners, and
              operators in control.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
