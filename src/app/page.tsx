"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReticleOverlay from "@/components/ReticleOverlay";
import TerminalWindow from "@/components/TerminalWindow";
import InteractiveBadge from "@/components/InteractiveBadge";
import BlackHoleVideo from "@/components/BlackHoleVideo";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const MacbookShowcaseView = () => {
  return (
    <div className="w-full bg-[#0a0a0a] flex flex-col items-center pt-20 pb-40">
      {/* Master Page Header */}
      <div className="w-full max-w-7xl px-6 mb-24 flex flex-col items-center text-center relative z-20">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#525252] font-mono mb-4">
          // SYSTEM.DIRECTORY.ACCESS
        </p>
        <h1 className="text-5xl md:text-7xl font-pixel text-white tracking-widest uppercase">
          Projects
        </h1>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-[var(--bg-accent)] mt-8"></div>
      </div>

      <div className="w-full max-w-7xl mb-[36vh]">
        <MacbookScroll
          title={
            <span className="text-5xl md:text-7xl font-pixel text-white tracking-widest uppercase">
              Try-On Virtual Exhibition <br />
              <span className="text-sm font-mono text-gray-500">PyTorch / Vercel / Supabase</span>
            </span>
          }
          src="/macbook1.png"
          showGradient={false}
        />
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <TerminalWindow title="try_on" subtitle="readme" variant="windows">
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Try-On the Virtual Exhibition is a cutting-edge web application that enables users to virtually try on fashion and beauty products using AI-powered image generation. Built for college exhibitions, this system provides an immersive experience where students can upload photos or use their camera to see how different products look on them in real-time.
            </p>
            <div>
              <InteractiveBadge href="https://github.com/Kushalongit-hub/Try-On" variant="gray">GITHUB</InteractiveBadge>
            </div>
          </div>
        </TerminalWindow>
      </div>

      <div className="h-[40vh] w-full" />

      <div className="w-full max-w-7xl mb-[32vh]">
        <MacbookScroll
          title={
            <span className="text-5xl md:text-7xl font-pixel text-white tracking-widest uppercase">
              Vakil-ai <br />
              <span className="text-sm font-mono text-gray-500">Legal Assistant</span>
            </span>
          }
          src="/vakil-ai.png"
          showGradient={false}
        />
      </div>

      <div className="w-full max-w-7xl relative z-10">
          <TerminalWindow title="vakil_ai" subtitle="readme" variant="windows">
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Vakil AI - India's First Free Legal Drafting Assistant. Vakil AI is a free, open-source, RAG-powered legal assistant designed specifically for Indian lawyers. It helps with legal research, document drafting, and navigating the new criminal laws (BNS, BNSS, BSA).
              </p>
              <div>
                <InteractiveBadge href="https://github.com/Kushalongit-hub/Vakil-ai" variant="gray">GITHUB</InteractiveBadge>
              </div>
            </div>
          </TerminalWindow>

          <div className="mt-12 w-full max-w-7xl relative z-10">
            <TerminalWindow title="github" subtitle="projects" variant="windows">
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  Explore more projects, experiments, and open-source contributions on GitHub.
                </p>
                <div>
                  <InteractiveBadge href="https://github.com/Kushalongit-hub" variant="gray">GITHUB</InteractiveBadge>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
    </div>
  );
};

export default function Home() {
  const [activeView, setActiveView] = useState("hero");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (activeView === "hero") {
          setActiveView("projects");
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
        } else if (activeView === "projects") {
          const maxScroll = document.body.offsetHeight - window.innerHeight;
          if (window.scrollY >= maxScroll - 10) return;
          window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
        }
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (activeView === "projects" && window.scrollY > 100) {
          window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
        } else {
          setActiveView("hero");
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  useEffect(() => {
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      if (ticking) return;
      ticking = true;

      if (e.deltaY > 0 && activeView === "hero" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setActiveView("projects");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else if (e.deltaY < 0 && activeView === "projects" && window.scrollY <= 10) {
        setActiveView("hero");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }

      setTimeout(() => {
        ticking = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeView]);

  return (
    <main className="w-full min-h-screen bg-blueprint-grid relative">
      <AnimatePresence mode="wait">
        {activeView === "hero" && (
          <motion.div
            key="hero-view"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-screen relative z-10"
          >
            <ReticleOverlay />

            <nav className="flex items-center justify-between border-b-2 border-brand-black bg-white px-6 py-4 shadow-brutal">
              <div className="text-lg font-bold uppercase tracking-widest">
                Kushal<span className="text-accent">.exe</span>
              </div>
              <div className="flex gap-3">
                <InteractiveBadge href="https://github.com/Kushalongit-hub">
                  GITHUB
                </InteractiveBadge>
                <InteractiveBadge href="#research">RESEARCH</InteractiveBadge>
                <InteractiveBadge href="/Kushal_Anvekar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  RESUME PDF
                </InteractiveBadge>
              </div>
            </nav>

            <section className="relative mx-auto max-w-6xl px-6 py-24">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-5xl font-black uppercase leading-none tracking-tight break-words md:text-7xl">
                    KUSHAL M
                    <br />
                    ANVEKAR
                  </h1>
                  <p className="text-base md:text-lg font-mono leading-relaxed max-w-2xl mt-6 mb-8 text-black/80">
                    Diploma candidate in Computer Science (AI/ML) engineered for the
                    complete development lifecycle. I specialize in deploying{" "}
                    <span className="text-[var(--bg-accent)] font-bold">AI-driven web applications</span>,
                    training{" "}
                    <span className="text-[var(--bg-accent)] font-bold">machine learning models</span>,
                    and architecting{" "}
                    <span className="text-[var(--bg-accent)] font-bold">resilient workflow automations</span>.
                    From containerized backend services to deep learning inference
                    pipelines, I build robust, production-grade systems. Currently
                    seeking a Technology Internship to contribute to scalable software
                    development and secure application practices.
                  </p>
                  <div className="mt-8 flex gap-6">
                    <InteractiveBadge href="#" variant="gray" onClick={() => setActiveView("projects")}>
                      View Projects
                    </InteractiveBadge>
                    <InteractiveBadge href="https://www.linkedin.com/in/kushal-m-anvekar/">
                      Get In Touch
                    </InteractiveBadge>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-6">
                  <TerminalWindow
                    title="system_status"
                    subtitle="v2.4.1"
                    variant="gray"
                    className="w-full max-w-[500px] min-h-[380px] flex flex-col shadow-brutal-lg"
                  >
                    <div className="flex flex-col h-full justify-between text-sm leading-relaxed">
                      <div>
                        <p>
                          <span className="opacity-50">user:</span> KUSHAL M ANVEKAR
                        </p>
                        <p>
                          <span className="opacity-50">location:</span> BENGALURU, IN
                        </p>
                        <p>
                          <span className="opacity-50">status:</span> SEEKING
                          TECHNOLOGY INTERNSHIP
                        </p>

                        <div className="my-4 border-t border-dashed border-black/30 w-full" />

                        <p>
                          <span className="opacity-50">education_node:</span> M.S.
                          RAMAIAH POLYTECHNIC
                        </p>
                        <p>
                          <span className="opacity-50">specialization:</span> ARTIFICIAL
                          INTELLIGENCE / ML
                        </p>
                        <p>
                          <span className="opacity-50">sys_load (GPA):</span> 8.0+ SYNCED
                        </p>

                        <div className="my-4 border-t border-dashed border-black/30 w-full" />

                        <p className="opacity-50">active_modules:</p>
                        <ul className="pl-4 mt-1 space-y-1 text-[var(--bg-accent)] font-bold">
                          <li>{">"} PYTORCH_NEURAL_NETWORKS</li>
                          <li>{">"} GCP_DOCKER_CONTAINERS</li>
                          <li>{">"} N8N_WORKFLOW_AUTOMATION</li>
                          <li>{">"} LLM_PROMPT_ENGINEERING</li>
                        </ul>
                      </div>

                      <div className="mt-8">
                        <span className="bg-black text-[var(--bg-accent)] px-2 py-1 animate-pulse">
                          █ listening for input...
                        </span>
                      </div>
                    </div>
                  </TerminalWindow>
                  <BlackHoleVideo />
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeView === "projects" && (
          <motion.div
            key="projects-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-screen relative z-10"
          >
            <MacbookShowcaseView />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
