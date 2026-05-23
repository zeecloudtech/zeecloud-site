import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'ZeeCloud Technologies — AI, cloud integration, and enterprise technology solutions for Canadian organizations.',
};

export default function SolutionsPage() {
  return (
    <main className="pb-24">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-sky-600">
            What We Offer
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            ZeeCloud delivers applied AI, cloud integration, and systems modernization
            for Canadian enterprises — from pilot to production.
          </p>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="1.6" />
                  <circle cx="17" cy="7" r="1.6" />
                  <circle cx="7" cy="17" r="1.6" />
                  <circle cx="17" cy="17" r="1.6" />
                  <path d="M8.6 7h6.8M7 8.6v6.8M17 8.6v6.8M8.6 17h6.8" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900">Applied AI & Machine Learning</h2>
              <p className="mt-3 text-sm text-slate-600">
                We design and deploy machine learning models trained on your operational
                data — for prediction, anomaly detection, classification, and decision support.
                No generic models. Built for your environment.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Predictive analytics and forecasting
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Anomaly and fraud detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Document intelligence and automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Custom model development and validation
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M7 18h10a4 4 0 0 0 0-8a6 6 0 0 0-11-2A4 4 0 0 0 7 18Z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900">Cloud Integration & Modernization</h2>
              <p className="mt-3 text-sm text-slate-600">
                Azure-native cloud architecture, legacy system migration, and API integration
                for enterprises moving from on-premise to cloud-first operations. Data
                residency in Canada.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Azure infrastructure design and deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Legacy system migration and API modernization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  TMS and ERP integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Canadian data residency and compliance
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="10" width="9" height="5" rx="1" />
                  <path d="M12 11h3.2a1 1 0 0 1 .8.4L18 14v2h-6z" />
                  <circle cx="8" cy="18" r="1.7" />
                  <circle cx="17" cy="18" r="1.7" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900">Logistics & Transportation AI</h2>
              <p className="mt-3 text-sm text-slate-600">
                Specialized AI consulting for transportation carriers and logistics operators.
                We understand TruckMate, fleet data, and the operational realities of
                Canadian carriers.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  TMS data strategy and analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Dispatch and load optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Billing and document workflow automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Pilot programs with measurable ROI
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ready to start?
            </h2>
            <p className="mt-4 text-slate-600">
              Tell us about your operational challenge and we will scope a pilot
              that delivers measurable results within 90 days.
            </p>
            
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            >
              Get in Touch
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