"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  "Vercel", "Visual Studio Code", "Next Js", "Tailwind", "Daisy UI",
  "HTML", "CSS", "Javascript", "Firebase", "Antigravity"
];

// This helper creates one long row of outlined text
const ScrollingRow = ({ direction = 1, topPosition = "50%" }) => (
  <div
    className="absolute w-[400%] flex whitespace-nowrap gap-10 pointer-events-none"
    style={{ top: topPosition, left: "-150%" }}
  >
    <motion.div
      initial={{ x: direction > 0 ? 0 : "-50%" }}
      animate={{ x: direction > 0 ? "-50%" : 0 }}
      transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      className="flex gap-10"
    >
      {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
        <span
          key={i}
          className="text-7xl md:text-9xl font-black uppercase italic text-text-secondary/10"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default function Home() {
  // We split the name into letters for the typing effect
  const name = "Adrian Bernal";
  const nameArray = Array.from(name);

  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden">

      {/* MAIN LAYOUT: Split screen grid */}
      <section className="relative z-10 grid min-h-screen w-full grid-cols-1 md:grid-cols-2">

        {/* LEFT COLUMN: Content & Navigation */}
        <div className="flex flex-col justify-center items-end bg-surface border-r border-border-custom px-12 z-20">

          {/* INNER CONTENT WRAPPER */}
          <div className="max-w-xl translate-x-[-30px] md:translate-x-[-40px]">

            {/* NAME / HEADER SECTION with Staggered Letter Animation */}
            <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-tighter uppercase italic leading-[0.85] text-right mb-6">
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.1, // Staggers the appearnce of each letter
                    ease: "easeInOut",
                  }}
                >
                  {/* Handle the line break after "Adrian " */}
                  {letter === " " ? "\u00A0" : letter}
                  {index === 5 && <br />}
                </motion.span>
              ))}
            </h1>

            {/* DESCRIPTION SECTION: Fade in going right */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex justify-end mb-12 !mt-5"
            >
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-md text-right">
                I am a dedicated aspiring developer with a passion for creating
                seamless digital solutions. My goal is to bridge the gap between
                elegant user interface design and robust back-end architecture,
                constantly evolving my technical skillset to build high-performance
                full-stack applications.
              </p>
            </motion.div>

            {/* BUTTONS SECTION: Fade in going up */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="grid grid-cols-2 gap-8 !mt-5 justify-items-end"
            >
              <button className="btn btn-primary btn-md md:btn-base rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-sm w-full py-2 transition-transform duration-300 hover:scale-105">
                View Work
              </button>

              <button className="btn btn-outline btn-md md:btn-base rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-sm w-full py-4 border-primary text-primary hover:bg-primary hover:text-white transition-transform duration-300 hover:scale-105">
                Download my CV
              </button>
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex items-center justify-center h-64 md:h-full w-full bg-card group overflow-hidden">

          {/* BACKGROUND SCROLLING TEXT LAYER */}
          <div className="absolute inset-0 z-0 -rotate-[25deg] scale-150 opacity-40">
            <ScrollingRow direction={1} topPosition="10%" />
            <ScrollingRow direction={-1} topPosition="40%" />
            <ScrollingRow direction={1} topPosition="70%" />
          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative z-10 w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <Image
              src="/Portrait/adrian.png"
              alt="Adrian Bernal"
              fill
              priority
              className="object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

      </section>
    </main>
  );
}