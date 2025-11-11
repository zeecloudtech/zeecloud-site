import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pill from "@/components/Pill";

export default function Page(){
  return (
    <main>
      <Header/>
      <Hero/>
      <section id="about" className="container -mt-10">
        <div className="card p-6 md:p-8">
          <Pill>Who We Are</Pill>
          <p className="text-slate-700 mt-3 text-sm md:text-base">
            At ZeeCloud Technologies, we bridge AI research and real-world implementation. From logistics automation to enterprise digital transformation, we help organizations unlock efficiency, sustainability, and growth.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="card p-5"><h3 className="font-bold">Innovation</h3><p className="text-sm text-slate-600 mt-1">R&D in AI and data science.</p></div>
            <div className="card p-5"><h3 className="font-bold">Integration</h3><p className="text-sm text-slate-600 mt-1">Seamless cloud and system connectivity.</p></div>
            <div className="card p-5"><h3 className="font-bold">Impact</h3><p className="text-sm text-slate-600 mt-1">Sustainable and measurable transformation.</p></div>
          </div>
        </div>
      </section>

      <section id="divisions" className="container mt-10">
        <Pill>Our Divisions</Pill>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="card p-6">
            <h3 className="font-bold">ZeeCloud AI</h3>
            <p className="text-sm text-slate-600 mt-2">R&D division advancing applied AI, predictive analytics, and digital twins.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">Logicopilot</h3>
            <p className="text-sm text-slate-600 mt-2">Flagship logistics-AI platform integrating telematics, ERP, and fleet data.</p>
            <a href="/projects/#logicopilot" className="text-zee-blue font-semibold mt-3 inline-block">Learn more about Logicopilot →</a>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">ZeeCloud Solutions</h3>
            <p className="text-sm text-slate-600 mt-2">IT consulting & cloud integration services for enterprises.</p>
            <a href="/contact/" className="text-zee-blue font-semibold mt-3 inline-block">Explore Consulting →</a>
          </div>
        </div>
      </section>

      <section className="container mt-10">
        <div className="card p-6 md:p-8 text-center md:text-left">
          <h3 className="font-bold text-xl">Let’s Build the Future Together</h3>
          <p className="text-slate-600 mt-2 text-sm max-w-3xl">
            Whether you’re a logistics carrier, enterprise client, or innovation partner, we’d love to connect.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-3">
            <a href="/contact/" className="px-5 py-3 rounded-xl bg-zee-primary text-white font-semibold w-full md:w-auto">Contact us</a>
            <a href="/projects/request-demo/" className="px-5 py-3 rounded-xl border border-slate-900/10 bg-white font-semibold w-full md:w-auto">Request a demo</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
