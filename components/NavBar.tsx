'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/contact',  label: 'About' },      // Update to your real routes if needed
  { href: '/divisions',label: 'Divisions' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact',  label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* desktop / tablet bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"     // change to /logo.png if you uploaded PNG
              alt="ZeeCloud logo"
              width={36}
              height={36}
              priority
              className="shrink-0"
            />
            <span className="sr-only sm:not-sr-only font-semibold tracking-tight text-slate-900">
              ZeeCloud Technologies
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-slate-900 ${
                  pathname === href ? 'text-slate-900 font-medium' : 'text-slate-600'
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-3 py-1.5 text-white transition-colors hover:bg-slate-700"
            >
              Work with us
            </Link>
          </nav>

          {/* mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'                 // X
                    : 'M4 6h16M4 12h16M4 18h16'               // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`py-2 ${
                    pathname === href ? 'text-slate-900 font-medium' : 'text-slate-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-slate-900 px-3 py-2 text-center text-white"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
