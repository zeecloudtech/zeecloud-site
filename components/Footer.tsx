export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ZeeCloud Technologies Inc. All rights reserved.
      </div>
    </footer>
  );
}
