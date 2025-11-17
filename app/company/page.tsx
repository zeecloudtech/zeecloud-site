'use client';

import Link from 'next/link';

export default function CompanyPage() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Company
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            About Zegnet Technologies
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            Zegnet Technologies is a Canadian innovation company dedicated to
            bridging AI research and real-world transformation. We design intelligent
            systems that help organizations optimize operations, modernize infrastructure,
            and unlock data-driven growth.
          </p>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Our work spans three integrated divisions: <strong>Zegnet AI</strong>{' '}
            for research and development, <strong>Logicopilot</strong> as our flagship
            logistics AI platform, and <strong>Zegnet Cloud Solutions</strong> for IT
            consulting and enterprise cloud integration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Talk to us
            </Link>
            <Link
              href="/divisions/logicopilot"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore our divisions
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-sm text-slate-600">
              To empower organizations through AI-driven innovation and cloud technologies
              that simplify operations, enhance efficiency, and unlock sustainable growth.
              We bridge the gap between research and implementation, helping businesses
              transform complex data into intelligent action.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Our Vision</h2>
            <p className="mt-4 text-sm text-slate-600">
              To become a trusted global leader in applied artificial intelligence and
              digital transformation — building a future where logistics, enterprises,
              and public systems operate smarter, faster, and more sustainably.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Our Core Values</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">
                  Innovation with purpose.
                </span>{' '}
                We develop technologies that solve real problems — combining creativity,
                research, and practical execution.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Integrity & collaboration.
                </span>{' '}
                Progress happens through transparency, teamwork, and shared success.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Scalability & impact.
                </span>{' '}
                Our solutions are designed to grow with our clients and drive long-term
                value.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Continuous learning.
                </span>{' '}
                We foster a culture of curiosity, adaptability, and lifelong learning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            Zegnet Technologies Inc. — Innovating today for a smarter, connected
            tomorrow.
          </p>
        </div>
      </section>
    </main>
  );
}
