export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500 text-sm">
              © 2025 ZeeCloud Technologies Inc. •{' '}
              <a href="/divisions" className="hover:underline">AI Innovation</a> •{' '}
              <a href="/divisions" className="hover:underline">Cloud Systems</a> •{' '}
              <a href="/divisions" className="hover:underline">Logistics Intelligence</a>
            </p>
          <p className="mt-1 text-slate-500 text-sm">
              77 Masters Green Crescent, Brampton, ON •{' '}
              <a href="mailto:info@zeecloudtechnologies.com" className="hover:underline">
                info@zeecloudtechnologies.com
              </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
