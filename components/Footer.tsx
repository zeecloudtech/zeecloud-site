export default function Footer(){
  return (
    <footer className="mt-16 bg-zee-primary text-white">
      <div className="container py-10 text-xs">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} ZeeCloud Technologies Inc. • Canada</p>
          <nav className="flex items-center gap-4">
            <a href="/privacy/" className="hover:underline">Privacy</a>
            <a href="/terms/" className="hover:underline">Terms</a>
            <a href="/contact/" className="hover:underline">Contact</a>
          </nav>
        </div>
        <p className="mt-3 opacity-80">AI Innovation • Cloud Systems • Logistics Intelligence</p>
      </div>
    </footer>
  )
}