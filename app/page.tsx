import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background overflow-hidden">
      {/* MAIN LAYOUT: Split screen grid */}
      <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">

        {/* LEFT COLUMN: Content & Navigation */}
        <div className="flex flex-col justify-center items-end bg-surface border-r border-border-custom px-12">

          {/* INNER CONTENT WRAPPER */}
          <div className="max-w-xl translate-x-[-30px] md:translate-x-[-40px]">

            {/* NAME / HEADER SECTION */}
            <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-tighter uppercase italic leading-[0.85] text-right mb-6">
              Adrian <br /> Bernal
            </h1>

            {/* DESCRIPTION SECTION */}
            <div className="flex justify-end mb-12 !mt-5">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-md text-right">
                I am a dedicated aspiring developer with a passion for creating
                seamless digital solutions. My goal is to bridge the gap between
                elegant user interface design and robust back-end architecture,
                constantly evolving my technical skillset to build high-performance
                full-stack applications.
              </p>
            </div>

            {/* BUTTONS SECTION */}
            <div className="grid grid-cols-2 gap-8 !mt-5 justify-items-end">

              <button className="btn btn-primary btn-md md:btn-base rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-sm w-full py-2 transition-transform duration-300 hover:scale-105">
                View Work
              </button>

              <button className="btn btn-outline btn-md md:btn-base rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-sm w-full py-4 border-primary text-primary hover:bg-primary hover:text-white transition-transform duration-300 hover:scale-105">
                Download my CV
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Centering the smaller container */}
        <div className="flex items-center justify-center h-64 md:h-full w-full bg-card group overflow-hidden">

          {/* IMAGE CONTAINER: Made much smaller using fixed widths and heights */}
          <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />

            {/* Hero Image */}
            <Image
              src="/Portrait/adrian.png"
              alt="Adrian Bernal"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Background Branding */}
          <div className="absolute bottom-10 right-10 z-0 text-text-main/10 font-black text-9xl select-none">
            AB
          </div>
        </div>

      </section>
    </main>
  );
}