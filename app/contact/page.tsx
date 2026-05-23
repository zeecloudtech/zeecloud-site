'use client';

export default function ContactPage() {
  return (
    <main className="pb-24">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-tight text-sky-600">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Get in Touch</h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600">
            Whether you are a logistics operator, enterprise client, or innovation partner — we would love to connect.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
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
                  <a href="mailto:info@zeecloudtech.com" className="mt-1 inline-block text-sky-600 hover:underline">info@zeecloudtech.com</a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/company/zeecloud-technologies" target="_blank" rel="noreferrer" className="mt-1 inline-block text-sky-600 hover:underline">linkedin.com/company/zeecloud-technologies</a>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-slate-900">What we can discuss</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />AI platform pilots for transportation and logistics</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />Enterprise cloud integration and modernization</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />Partnership and research collaboration</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />Funding and investor inquiries</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-500">We respond to all inquiries within one business day.</p>
              <form className="mt-6 grid gap-4" action="mailto:info@zeecloudtech.com" method="post" encType="text/plain">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" placeholder="Your name" name="name" />
                  <input required type="email" className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" placeholder="Work email" name="email" />
                </div>
                <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none" name="reason">
                  <option>General Inquiry</option>
                  <option>Platform Demo — Logicopilot</option>
                  <option>Partnership</option>
                  <option>Enterprise Consulting</option>
                  <option>Investor or Funding</option>
                </select>
                <textarea className="rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none" placeholder="Tell us about your project or question" rows={5} name="message" />
                <button type="submit" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}