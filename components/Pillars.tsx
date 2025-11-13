import Link from 'next/link';

const items = [
  {
    title: 'ZeeCloud AI',
    desc: 'R&D in data and artificial intelligence.',
    href: '/divisions/zeecloud-ai',
  },
  {
    title: 'Logicopilot',
    desc: 'Smart logistics & fleet optimization platform.',
    href: '/divisions/logicopilot',
  },
  {
    title: 'ZeeCloud Solutions',
    desc: 'IT consulting & cloud integration services.',
    href: '/divisions/solutions',
  },
];

export default function Pillars() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
                key={it.title}
                href={it.href}
                className="group rounded-2xl border border-slate-200 hover:border-slate-300/80 hover:shadow-md hover:scale-[1.02] transform transition duration-200 bg-white"
            >
              <h3 className="text-base font-bold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
