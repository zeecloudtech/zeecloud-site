export default function Demo(){
  return (
    <main className="container py-10">
      <div className="card p-6 md:p-8">
        <h1 className="text-2xl font-bold">Request a Demo</h1>
        <p className="text-sm text-slate-600 mt-2">Tell us a bit about your fleet and goals. We’ll follow up within 1–2 business days.</p>
        <form className="mt-5 grid gap-4" action="mailto:admin@zeecloudtech.com" method="post" encType="text/plain">
          <input required className="border rounded-lg p-3" placeholder="Your name" name="name" />
          <input required className="border rounded-lg p-3" placeholder="Work email" type="email" name="email" />
          <input className="border rounded-lg p-3" placeholder="Company" name="company" />
          <select className="border rounded-lg p-3" name="topic">
            <option>Product Demo</option>
            <option>Partnership</option>
            <option>Funding Collaboration</option>
          </select>
          <textarea className="border rounded-lg p-3" placeholder="Goals / notes" rows={5} name="notes"></textarea>
          <button className="px-5 py-3 rounded-xl bg-zee-primary text-white font-semibold w-full md:w-auto" type="submit">Send request</button>
        </form>
        <p className="text-xs text-slate-500 mt-3">Later we can replace this with an Azure Function for server-side processing.</p>
      </div>
    </main>
  )
}
