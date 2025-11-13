'use client';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Logicopilot – AI-assisted dispatch',
      status: 'In active development',
      summary:
        'Building an AI co-pilot for dispatchers to match loads, trucks, and schedules while reducing empty miles.',
    },
    {
      title: 'Data platform & observability',
      status: 'Foundations',
      summary:
        'Designing the data and telemetry layer needed to support optimization, analytics, and future agents.',
    },
    {
      title: 'Fleet analytics & reporting',
      status: 'Planned',
      summary:
        'Standardizing KPIs and dashboards for fleet performance, service levels, and utilization.',
    },
  ];

  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Current focus areas and product initiatives.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            This page gives a high-level overview of key projects. As work progresses, we
            can expand each into a detailed case study or product page.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl bg-white p-6 border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-base font-semibold text-slate-900">{p.title}</h2>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
