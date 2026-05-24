export default function SolutionsPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Solutions</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            ZeeCloud delivers applied AI, cloud integration, and systems modernization
            for Canadian enterprises — from pilot to production.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900">AI Decision Intelligence</h2>
              <p className="mt-3 text-sm text-slate-600">
                Machine learning models trained on your operational data — delivering
                prediction, anomaly detection, and decision support at enterprise scale.
              </p>
              <ul className="mt-4 space-y-2">
                {["Predictive analytics and forecasting", "Anomaly and fraud detection", "Custom model development and validation"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />{p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900">Enterprise Data Infrastructure</h2>
              <p className="mt-3 text-sm text-slate-600">
                Azure-native architecture and API integration for enterprises moving
                from legacy systems to cloud-first operations. Canadian data residency.
              </p>
              <ul className="mt-4 space-y-2">
                {["Azure infrastructure design and deployment", "Legacy system migration and API modernization", "Canadian data residency and compliance"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />{p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900">Logistics Intelligence Platform</h2>
              <p className="mt-3 text-sm text-slate-600">
                Specialized AI for transportation carriers and logistics operators.
                We understand TruckMate, fleet data, and Canadian carrier operations.
              </p>
              <ul className="mt-4 space-y-2">
                {["Dispatch and load optimization", "Billing and document workflow automation", "Pilot programs with measurable ROI"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />{p}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Ready to start?</h2>
            <p className="mt-4 text-slate-600">
              Tell us about your operational challenge and we will scope a pilot
              that delivers measurable results within 90 days.
            </p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}