'use client';

export default function TermsPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Terms
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Terms of use (preview).
          </h1>
          <p className="mt-6 text-sm text-slate-600">
            This page is a simple placeholder to ensure the site is complete for early
            reviewers. It should eventually be replaced with formal terms of use prepared
            or reviewed by legal counsel.
          </p>

          <h2 className="mt-8 text-base font-semibold text-slate-900">
            Intended use
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            This website is provided for informational purposes only. Nothing here
            constitutes a binding offer, service guarantee, or legal commitment unless
            explicitly stated in a signed agreement.
          </p>

          <h2 className="mt-8 text-base font-semibold text-slate-900">
            No warranties
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Content may change as the company evolves. While we aim for accuracy, all
            information is provided &quot;as is&quot; without warranties of any kind.
          </p>

          <h2 className="mt-8 text-base font-semibold text-slate-900">
            Next steps
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Formal terms will be published as we begin signing customers and partners.
          </p>
        </div>
      </section>
    </main>
  );
}
