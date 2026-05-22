import Link from 'next/link';
import HeroBackdrop from '@/components/HeroBackdrop';
import Pillars from '@/components/Pillars';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <HeroBackdrop />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          <p className="text-sm font-medium text-sky-700 tracking-widest uppercase mb-4">
            ZeeCloud Technologies Inc.
          </p>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Applied AI for Canadian Enterprise.
          </h1>

          <p className="mt-6 max-w-2xl text-slate-600 text-lg">
            ZeeCloud Technologies builds intelligent platforms and enterprise solutions
            for logistics, transportation, and operational industries across Canada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/platform"
              className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-700 transition-all duration-200 ease-in-out"
            >
              Explore Logicopilot
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-in-out"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <Reveal>
        <div className="border-y border-slate-200 bg-slate-50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500 tracking-wide">
              <span>AI-Driven</span>
              <span className="text-slate-300">|</span>
              <span>Cloud-Native</span>
              <span className="text-slate-300">|</span>
              <span>Enterprise-Ready</span>
              <span className="text-slate-300">|</span>
              <span>Built for Canada</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* WHAT WE DO */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                AI Platform Development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Building production-grade AI platforms that deliver measurable
                operational intelligence for enterprise environments.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Enterprise Cloud & Data
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cloud-native architecture, data pipelines, and infrastructure
                modernization for Canadian enterprises.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Technology Deployment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hands-on implementation, systems integration, and enterprise
                technology deployment across logistics and operational industries.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* LOGICOPILOT HIGHLIGHT */}
      <Reveal>
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-4">
                Flagship Platform
              </p>
              <h2 className="text-4xl font-bold mb-6">
                Introducing Logicopilot
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our flagship AI operations intelligence platform for Canadian trucking
                and logistics carriers. Built on TruckMate TMS data. Deployed in live
                carrier operations. Developed in partnership with Scale AI — Canada's
                flagship supply chain AI program.
              </p>
              <Link
                href="/platform"
                className="rounded-xl bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-500 transition-all duration-200"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* BUILT FOR CANADA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Built for Canadian Enterprise
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              ZeeCloud Technologies is a Canadian AI company building intelligent
              platforms that solve real operational problems — not theoretical ones.
              Designed and developed in Canada for enterprise transportation and
              operational environments.
            </p>
          </div>
        </section>
      </Reveal>

      {/* SUB-HERO PILLARS */}
      <Reveal>
        <Pillars />
      </Reveal>
    </>
  );
}