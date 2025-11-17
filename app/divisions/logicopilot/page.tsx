import Link from 'next/link';

export default function LogicopilotPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Zegnet Technologies • Product
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Smart logistics and fleet optimization powered by AI.
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-slate-600">
            Logicopilot gives dispatchers and operations teams real-time insight into loads,
            drivers, and assets. It helps automate routine decisions, reduce empty miles, and
            improve visibility across your entire operation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:info@zegnet.ca?subject=Logicopilot%20demo"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Request a demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50"
            >
              Explore key features
            </a>
          </div>
        </div>
      </section>

      {/* Simple feature strip – can be expanded later */}
      <section id="features" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-base font-semibold text-slate-900">
            Built for real operations, not slide decks.
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base text-slate-600">
            This is a first-pass description. As pilots go live we can replace this with real
            workflows, screenshots, and case studies.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <h3 className="text-sm font-semibold text-slate-900">
                AI-assisted dispatch
              </h3>
              <p className="mt-2">
                Suggests good driver–load matches based on distance, availability, and basic rules.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <h3 className="text-sm font-semibold text-slate-900">
                Fleet & load visibility
              </h3>
              <p className="mt-2">
                High-level view of where trucks and loads are, with simple status summaries.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <h3 className="text-sm font-semibold text-slate-900">
                Ready for deeper analytics
              </h3>
              <p className="mt-2">
                The structure is in place so we can plug in more advanced optimization and
                reporting as the product matures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
