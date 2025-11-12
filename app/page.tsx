import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold text-sky-700">ZeeCloud Technologies Inc.</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transforming Logistics and Enterprise Operations through AI and Cloud Intelligence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We bridge AI research and real-world implementation—from logistics automation to enterprise
            digital transformation—to unlock efficiency, sustainability, and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">Explore Logicopilot</Link>
            <Link href="/contact" className="btn-secondary">Work with Us</Link>
          </div>
        </div>

        {/* soft background shape (pure Tailwind, no dynamic classes) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-3xl"
        >
          <div className="mx-auto h-56 w-[44rem] rotate-45 bg-gradient-to-tr from-sky-200 to-teal-200 opacity-50 sm:h-72 sm:w-[60rem]" />
        </div>
      </section>

      {/* YOUR EXISTING SECTIONS BELOW… keep using a consistent container */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Who We Are cards etc. */}
      </section>
    </main>
  );
}
