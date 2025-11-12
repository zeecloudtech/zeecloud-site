export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-700">
            © {new Date().getFullYear()} ZeeCloud Technologies Inc. ·
            <span className="ml-1">AI Innovation • Cloud Systems • Logistics Intelligence</span>
          </p>
          <p>
            77 Masters Green Crescent, Brampton, ON ·{' '}
            <a className="underline decoration-slate-300 hover:text-slate-900" href="mailto:info@zeecloudtechnologies.com">
              info@zeecloudtechnologies.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
