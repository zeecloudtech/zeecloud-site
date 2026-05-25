'use client';

export default function ContactPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold uppercase tracking-tight text-sky-600">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            {"Let's build something together."}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Whether you are a fleet operator, technology partner, or funding organization —
            we are happy to discuss pilots, integrations, and collaboration opportunities.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Contact information</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="mt-1">Brampton, Ontario, Canada</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a href="mailto:info@zeecloudtech.com" className="mt-1 inline-block text-sky-600 hover:underline">
                    info@zeecloudtech.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/company/zeecloud-technologies" target="_blank" rel="noreferrer" className="mt-1 inline-block text-sky-600 hover:underline">
                    linkedin.com/company/zeecloud-technologies
                  </a>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Partnerships</h3>
                  <p className="mt-2 text-sm text-slate-600">Universities, incubators, cloud providers, and logistics partners on joint pilots and research.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Pilots & proofs of concept</h3>
                  <p className="mt-2 text-sm text-slate-600">If you have data and operational pain points, we can scope a time-boxed pilot to test value before a larger rollout.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Advisors & funding</h3>
                  <p className="mt-2 text-sm text-slate-600">We welcome conversations with advisors, grant programs, and funding partners aligned with applied AI.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-500">We respond to all inquiries within one business day.</p>
              <form
                className="mt-6 grid gap-4"
                action="https://formspree.io/f/mnjrbdpl"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New inquiry — ZeeCloud Technologies" />
                <input type="hidden" name="_next" value="https://www.zeecloudtech.com/contact" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="name" placeholder="Your name"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" />
                  <input required type="email" name="email" placeholder="Work email"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" />
                </div>
                <select name="reason"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-400 focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Platform Demo — Logicopilot</option>
                  <option>Partnership</option>
                  <option>Enterprise Consulting</option>
                  <option>Investor or Funding</option>
                </select>
                <textarea name="message" rows={5} placeholder="Tell us about your project or question"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" />
                <button type="submit"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}