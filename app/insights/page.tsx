'use client';

export default function InsightsPage() {
  const posts = [
    {
      title: 'Why logistics is the perfect domain for applied AI',
      tag: 'Logistics AI',
      date: 'Coming soon',
    },
    {
      title: 'Building a data foundation before deploying co-pilots',
      tag: 'Data platform',
      date: 'Coming soon',
    },
    {
      title: 'From scripts to systems: hardening prototypes into products',
      tag: 'Engineering',
      date: 'Coming soon',
    },
  ];

  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Insights
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Notes, experiments, and learnings from the field.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            This section will host articles, updates, and technical deep dives as the
            company progresses. For now, these are placeholders to show the structure.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-xl bg-white p-6 border border-slate-200"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-tight text-slate-500">
                  {post.tag}
                </span>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
              <h2 className="mt-3 text-base font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Content coming soon. This placeholder shows how future posts will be
                presented.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
