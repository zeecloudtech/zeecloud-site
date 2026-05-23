export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-slate-500 text-sm">
            {"© 2026 ZeeCloud Technologies Inc. · "}
            <a href="/platform" className="hover:underline">Platform</a>
            {" · "}
            <a href="/solutions" className="hover:underline">Solutions</a>
            {" · "}
            <a href="/company" className="hover:underline">About</a>
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://www.linkedin.com/company/zeecloud-technologies" target="_blank" rel="noreferrer" className="hover:text-slate-700" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/zeecloudtech" target="_blank" rel="noreferrer" className="hover:text-slate-700" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5A12 12 0 0 0 0 12.6a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2a2.6 2.6 0 0 0 3.4 1a2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.6-1.4-5.6-6.1a4.8 4.8 0 0 1 1.3-3.3a4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C17 3.9 18 4.2 18 4.2a4.4 4.4 0 0 1 .1 3.2a4.8 4.8 0 0 1 1.3 3.3c0 4.7-2.9 5.8-5.6 6.1a2.9 2.9 0 0 1 .8 2.3v3.3c0 .3.3.7.8.6A12 12 0 0 0 24 12.6A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <a href="mailto:zegaye@zeecloudtech.com" className="hover:text-slate-700" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4l-8 5L4 8V6l8 5l8-5Z"/>
              </svg>
            </a>
          </div>

          <p className="mt-1 text-slate-500 text-sm">
            {"Brampton, Ontario, Canada · "}
            <a href="mailto:zegaye@zeecloudtech.com" className="hover:underline">
              zegaye@zeecloudtech.com
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}