import Link from 'next/link';
import HeroBackdrop from '@/components/HeroBackdrop';
import Pillars from '@/components/Pillars';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        {/* your gradient background is already on the parent — this goes on top */}
        <HeroBackdrop />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-sm font-medium text-sky-700">ZeeCloud Technologies Inc.</p>

          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Transforming Logistics and Enterprise Operations
            through AI and Cloud Intelligence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            We bridge AI research and real-world implementation—helping organizations
            automate logistics, modernize IT systems, and achieve digital transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/divisions/logicopilot"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-white hover:bg-slate-700"
            >
              Explore Logicopilot
            </Link>
            <Link
              href="/divisions"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 hover:bg-slate-50"
            >
              Discover our solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SUB-HERO PILLARS */}
      <Pillars />
    </>
  );
}
