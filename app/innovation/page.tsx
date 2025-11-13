'use client';

import Link from 'next/link';

export default function InnovationPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Innovation
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Turning ideas into deployable AI systems.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            Innovation at ZeeCloud spans from early-stage experimentation to production
            rollouts. We prototype quickly, validate with real data, and then migrate
            successful concepts into stable, maintainable platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              View insights & updates
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">Discovery & R&D</h2>
            <p className="mt-3 text-sm text-slate-600">
              We identify opportunities where AI, automation, and cloud infrastructure can
              meaningfully improve logistics and enterprise operations.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Prototyping & pilots
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We build lean prototypes, test them with real users, and run pilots to
              measure impact before scaling.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 border border-slate-200">
            <h2 className="text-base font-semibold text-slate-900">
              Scale & productization
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              When a solution proves its value, we harden it with proper architecture,
              monitoring, and governance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
