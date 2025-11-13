import Link from 'next/link';

const items = [
  {
    title: 'ZeeCloud AI',
    desc: 'R&D in data and artificial intelligence.',
    href: '/divisions/zeecloud-ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-sky-700">
        <path fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14h-2v-2h2Zm0-4h-2V6h2Z"/>
      </svg>
    ),
  },
  {
    title: 'Logicopilot',
    desc: 'Smart logistics & fleet optimization platform.',
    href: '/divisions/logicopilot',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-emerald-700">
        <path fill="currentColor"
          d="M20 8h-3l-2-3H5a1 1 0 0 0-1 1v10h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h2V12a4 4 0 0 0-4-4Zm-9 8a1 1 0 1 1-1-1a1 1 0 0 1 1 1Zm10 0a1 1 0 1 1-1-1a1 1 0 0 1 1 1Z"/>
      </svg>
    ),
  },
  {
    title: 'ZeeCloud Solutions',
    desc: 'IT consulting & cloud integration services.',
    href: '/divisions/solutions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-indigo-700">
        <path fill="currentColor"
          d="M19 18a4 4 0 1 0 0-8a5 5 0 0 0-9.7-1.7A4.5 4.5 0 1 0 5 18Z"/>
      </svg>
    ),
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
              >
                <span className="group block rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300/80 hover:shadow-md">
                  
                  {/* Icon */}
                  <div className="mb-3">
                    {it.icon}
                  </div>
              
                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900">
                    {it.title}
                  </h3>
              
                  {/* Description */}
                  <p className="mt-1 text-sm text-slate-600">
                    {it.desc}
                  </p>
              
                  {/* Learn more */}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 12H5m7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
              
                </span>
              </Link>

          ))}
        </div>
      </div>
    </section>
  );
}
