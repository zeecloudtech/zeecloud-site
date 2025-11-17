export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright + Links */}
          <p className="text-slate-500 text-sm">
            © 2025 Zegnet Technologies Inc. •{' '}
            <a href="/divisions" className="hover:underline">AI Innovation</a> •{' '}
            <a href="/divisions" className="hover:underline">Cloud Systems</a> •{' '}
            <a href="/divisions" className="hover:underline">Logistics Intelligence</a>
          </p>

          {/* ⭐ Add social icons RIGHT HERE */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="https://www.linkedin.com/company/zeecloud-technologies"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM7 8.33H4.88V19H7ZM13.06 8.09a4.44 4.44 0 0 0-3.2 1.35V8.33H7v10.64h2.86v-5.7a2.38 2.38 0 0 1 2.2-1.51c1.17 0 1.9.78 1.9 2.1V19H17V13c0-2.94-1.57-4.91-3.94-4.91Z"/>
              </svg>
            </a>

            <a
              href="https://github.com/zeecloudtech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5A12 12 0 0 0 0 12.6a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2a2.6 2.6 0 0 0 3.4 1a2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.6-1.4-5.6-6.1a4.8 4.8 0 0 1 1.3-3.3a4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C17 3.9 18 4.2 18 4.2a4.4 4.4 0 0 1 .1 3.2a4.8 4.8 0 0 1 1.3 3.3c0 4.7-2.9 5.8-5.6 6.1a2.9 2.9 0 0 1 .8 2.3v3.3c0 .3.3.7.8.6A12 12 0 0 0 24 12.6A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>

            <a
              href="mailto:info@zeecloudtechnologies.com"
              className="hover:text-slate-700"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4l-8 5L4 8V6l8 5l8-5Z"/>
              </svg>
            </a>
          </div>

          {/* Address + Email */}
          <p className="mt-1 text-slate-500 text-sm">
            77 Masters Green Crescent, Brampton, ON •{' '}
            <a href="mailto:info@zegnet.ca" className="hover:underline">
              info@zegnet.ca
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
