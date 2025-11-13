import Link from 'next/link';
import HeroBackdrop from '@/components/HeroBackdrop';
import Pillars from '@/components/Pillars';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        {/* your gradient background is already on the parent — this goes on top */}
        <HeroBackdrop />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-sm font-medium text-sky-700">ZeeCloud Technologies Inc.</p>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Transforming Logistics and Enterprise Operations
            through AI and Cloud Intelligence.
          </h1>

          <p className="mt-6 max-w-2xl text-slate-600">
            We bridge AI research and real-world implementation—helping organizations
            automate logistics, modernize IT systems, and achieve digital transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/divisions/logicopilot"
              className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-700 transition-all duration-200 ease-in-out"
            >
              Explore Logicopilot
            </Link>
            <Link
              href="/divisions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-in-out"
            >
              See How We Innovate
            </Link>
          </div>
        </div>
      </section>

      {/* SUB-HERO PILLARS */}
      <Reveal>
        <Pillars />
      </Reveal>
    </>
  );
}
