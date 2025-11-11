'use client';
export default function Contact(){
  return (
    <main className="container py-10">
      <div className="card p-6 md:p-8">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="text-sm text-slate-600 mt-2">Whether you’re a logistics company, enterprise client, or innovation partner, we’d love to connect.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-sm"><strong>Address:</strong> 77 Masters Green Crescent, Brampton, ON</div>
            <div className="text-sm mt-1"><strong>Email:</strong> <a className="text-zee-blue" href="mailto:info@zeecloudtech.com">info@zeecloudtech.com</a></div>
            <div className="text-sm mt-1"><strong>Phone:</strong> +1 647-534-9285</div>
          </div>
          <form className="grid gap-3" action="mailto:info@zeecloudtech.com" method="post" encType="text/plain">
            <input required className="border rounded-lg p-3" placeholder="Your name" name="name" />
            <input required className="border rounded-lg p-3" placeholder="Work email" type="email" name="email" />
            <select className="border rounded-lg p-3" name="reason">
              <option>General Inquiry</option>
              <option>Partnership</option>
              <option>Consulting</option>
              <option>Product Demo</option>
            </select>
            <textarea className="border rounded-lg p-3" placeholder="Message" rows={5} name="message"></textarea>
            <button className="px-5 py-3 rounded-xl bg-zee-primary text-white font-semibold w-full md:w-auto" type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}
