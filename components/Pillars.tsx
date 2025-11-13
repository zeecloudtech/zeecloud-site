import Link from 'next/link';

const items = [
  {
    title: 'ZeeCloud AI',
    desc: 'R&D in data and artificial intelligence.',
    href: '/divisions/zeecloud-ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a5 5 0 0 0-5 5v8a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-6 0V8a3 3 0 0 1 3-3Zm-6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
      </svg>
    ),
  },
  {
    title: 'Logicopilot',
    desc: 'Smart logistics & fleet optimization platform.',
    href: '/divisions/logicopilot',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5h13v10H3zM16 8h3l2 3v4h-5z"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    ),
  },
  {
    title: 'ZeeCloud Solutions',
    desc: 'IT consulting & cloud integration services.',
    href: '/divisions/solutions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
