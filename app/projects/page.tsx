export default function Projects(){
  return (
    <main className="container py-10">
      <div className="card p-6 md:p-8">
        <h1 className="text-2xl font-bold">Projects & Flagship Initiatives</h1>
        <p className="text-sm text-slate-600 mt-2">Research collaborations and production-grade solutions in logistics and enterprise AI.</p>

        <section id="logicopilot" className="mt-6">
          <h2 className="font-bold text-xl">Logicopilot: The Future of Intelligent Dispatch</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-3xl">
            Powered by AI and cloud data pipelines, Logicopilot helps fleets optimize routes, automate load assignments, and reduce idle time.
          </p>
          <div className="mt-3">
            <a href="/projects/request-demo/" className="px-5 py-3 rounded-xl bg-zee-primary text-white font-semibold">Request a demo</a>
          </div>
        </section>
      </div>
    </main>
  )
}
