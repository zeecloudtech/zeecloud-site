'use client';

import Link from 'next/link';

export default function ConnectPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Connect
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Let’s explore what we can build together.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            Whether you’re a fleet operator, technology partner, researcher, or funding
            organization, we’re happy to discuss pilots, integrations, and collaboration
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Contact form
            </Link>
            <a
              href="mailto:info@zegnet.ca"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Partnerships</h2>
            <p className="mt-3 text-sm text-slate-600">
              We&apos;re open to working with universities, incubators, cloud providers,
              and logistics partners on joint pilots and research.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Pilots & proofs of concept</h2>
            <p className="mt-3 text-sm text-slate-600">
              If you have data and operational pain points, we can scope a small,
              time-boxed pilot to test value before a larger rollout.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Advisors & funding</h2>
            <p className="mt-3 text-sm text-slate-600">
              We welcome conversations with advisors, grant programs, and funding
              partners aligned with applied AI and digital transformation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
