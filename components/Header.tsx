export default function Header(){
  return (
    <header className="container py-5 flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 font-bold">
        <img src="/assets/zegnet-logo.svg" className="h-7 w-7" alt="Zegnet logo" />
        <span>Zegnet Technologies </span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-slate-600">
        <a href="/#about" className="hover:text-slate-900">About</a>
        <a href="/#divisions" className="hover:text-slate-900">Divisions</a>
        <a href="/projects/" className="hover:text-slate-900">Projects</a>
        <a href="/insights/" className="hover:text-slate-900">Insights</a>
        <a href="/contact/" className="hover:text-slate-900">Contact</a>
      </nav>
    </header>
  )
}
