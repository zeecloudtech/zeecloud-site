import Link from 'next/link';

const items = [
  {
    title: 'Zegnet AI',
    desc: 'R&D in data and artificial intelligence.',
    href: '/divisions/zeecloud-ai',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 4 data nodes */}
        <circle cx="7" cy="7" r="1.6" />
        <circle cx="17" cy="7" r="1.6" />
        <circle cx="7" cy="17" r="1.6" />
        <circle cx="17" cy="17" r="1.6" />
        {/* connections */}
        <path d="M8.6 7h6.8" />
        <path d="M7 8.6v6.8" />
        <path d="M17 8.6v6.8" />
        <path d="M8.6 17h6.8" />
      </svg>
    ),
  },
  {
    title: 'Logicopilot',
    desc: 'Smart logistics & fleet optimization platform.',
    href: '/divisions/logicopilot',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* trailer */}
        <rect x="3" y="10" width="9" height="5" rx="1" />
        {/* cab + front */}
        <path d="M12 11h3.2a1 1 0 0 1 .8.4L18 14v2h-6z" />
        {/* wheels */}
        <circle cx="8" cy="18" r="1.7" />
        <circle cx="17" cy="18" r="1.7" />
      </svg>
    ),
  },
  {
    title: 'Zegnet Cloud Solutions',
    desc: 'IT consulting & cloud integration services.',
    href: '/divisions/solutions',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M7 18h10a4 4 0 0 0 0-8a6 6 0 0 0-11-2A4 4 0 0 0 7 18Z" />
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
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
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
