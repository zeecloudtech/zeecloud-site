export default function Hero(){
  return (
    <section className="hero text-white">
      <div className="container py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
          Transforming Logistics and Enterprise Operations through AI and Cloud Intelligence.
        </h1>
        <p className="text-white/90 mt-4 max-w-2xl">
          From advanced AI systems to cloud integration and IT consulting, ZeeCloud Technologies helps organizations of all sizes unlock efficiency, connectivity, and innovation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/projects/#logicopilot" className="px-5 py-3 rounded-xl bg-white text-zee-primary font-semibold">Explore Logicopilot</a>
          <a href="/contact/" className="px-5 py-3 rounded-xl border border-white/70 text-white font-semibold">Work with Us</a>
        </div>
      </div>
    </section>
  )
}