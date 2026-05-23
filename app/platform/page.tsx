import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Logicopilot — AI-powered operations platform for Canadian transportation and logistics enterprises.',
};

export default function PlatformPage() {
  return (
    <main className="pb-24">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-sky-600">
            Our Platform
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Logicopilot
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            An AI-powered operations platform purpose-built for Canadian transportation
            and logistics enterprises. Reduce delays, eliminate manual bottlenecks, and
            unlock the full value of your operational data.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            >
              Request a Demo
            </a>
            
              href="/solutions"
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:shadow-sm"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Core capabilities
          </h2>
          <p className="mt-2 text-slate-600">
            Logicopilot integrates directly with your existing TMS and operational systems.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Predictive Dispatch',
                desc: 'AI models that surface stale tenders and dispatch delays before they impact revenue — reducing missed loads and idle fleet time.',
              },
              {
                title: 'Document Intelligence',
                desc: 'Automated detection of missing PODs and BOLs that block billing cycles, with real-time alerts and workflow triggers.',
              },
              {
                title: 'Billing Acceleration',
                desc: 'Identifies revenue stuck in workflow and surfaces actionable exceptions — cutting days sales outstanding across your fleet.',
              },
              {
                title: 'Fuel & Anomaly Detection',
                desc: 'Machine learning models trained on your operational data to flag fuel anomalies, theft patterns, and maintenance outliers.',
              },
              {
                title: 'Load Execution Analytics',
                desc: 'Tracks planned vs executed loads and surfaces systemic gaps in dispatch, driver assignment, and route planning.',
              },
              {
                title: 'TMS Integration',
                desc: 'Native integration with TruckMate (TMW) and major Canadian TMS platforms — no rip-and-replace required.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300 hover:shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Canada */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Designed and developed in Canada
            </h2>
            <p className="mt-4 text-slate-600">
              Logicopilot is built for the realities of Canadian enterprise — bilingual
              operations, cross-border compliance, and the operational complexity of
              coast-to-coast logistics. Hosted on Microsoft Azure with data residency
              in Canada.
            </p>
            
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
            >
              Talk to our team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5m7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}