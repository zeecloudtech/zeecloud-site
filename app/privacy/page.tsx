'use client';

export default function PrivacyPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
            Privacy
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy & data responsibility (preview).
          </h1>
          <p className="mt-6 text-sm text-slate-600">
            This page is an initial placeholder and does not constitute legal advice. As
            the company grows and begins handling production data, this policy should be
            reviewed and finalized with legal counsel.
          </p>

          <h2 className="mt-8 text-base font-semibold text-slate-900">
            What we focus on
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
            <li>Collecting only the data we genuinely need to provide services.</li>
            <li>Using data for clearly defined, agreed-upon purposes.</li>
            <li>Protecting data with appropriate security and access controls.</li>
            <li>Respecting confidentiality and contractual obligations.</li>
          </ul>

          <h2 className="mt-8 text-base font-semibold text-slate-900">
            Next steps
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            As we move from pilots into production environments, we will publish a full
            privacy policy aligned with Canadian regulations and any contracts we sign
            with customers and partners.
          </p>
        </div>
      </section>
    </main>
  );
}
