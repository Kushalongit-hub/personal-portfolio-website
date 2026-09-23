"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReticleOverlay from "@/components/ReticleOverlay";
import TerminalWindow from "@/components/TerminalWindow";
import InteractiveBadge from "@/components/InteractiveBadge";
import BlackHoleVideo from "@/components/BlackHoleVideo";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import ShaderBackground from "@/components/ShaderBackground";

const ResearchView = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="w-full bg-blueprint-grid flex flex-col items-center pt-20 pb-40">
      <div className="w-full max-w-7xl px-6 mb-24 flex flex-col items-center text-center relative z-20">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#525252] font-mono mb-4">
          -- SYSTEM.ACCESS_RESEARCH
        </p>
        <h1 className={`text-4xl md:text-6xl font-pixel tracking-widest uppercase ${isDark ? "text-white" : "text-black"}`}>
          Research
        </h1>
        <div className="w-16 h-1 bg-[var(--bg-accent)] mt-8"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <TerminalWindow title="research" subtitle="node" variant="windows">
          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              Research streams are still compiling. This section is currently under development as I continue exploring ML/AI systems, RAG pipelines, and applied computer vision. New findings will be published here as they are validated and documented.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InteractiveBadge href="https://github.com/Kushalongit-hub" variant="gray">
                GITHUB
              </InteractiveBadge>
              <InteractiveBadge href="https://www.linkedin.com/in/kushal-m-anvekar/" variant="gray">
                LINKEDIN
              </InteractiveBadge>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

const ContactView = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center overflow-y-auto">
      <ShaderBackground />
      <div className="w-full max-w-7xl px-6 pt-20 pb-40 flex flex-col items-center text-center relative z-20">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#525252] font-mono mb-4">
          -- SYSTEM.INITIATE_CONTACT
        </p>
        <h1 className="text-4xl md:text-6xl font-pixel text-white tracking-widest uppercase">
          Contact
        </h1>
        <div className="w-16 h-1 bg-[var(--bg-accent)] mt-8"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <TerminalWindow title="contact" subtitle="protocol" variant="windows">
          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              Transmissions are monitored. Use the channels below to establish a secure connection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InteractiveBadge href="https://www.linkedin.com/in/kushal-m-anvekar/" variant="gray">
                LINKEDIN
              </InteractiveBadge>
              <InteractiveBadge href="https://github.com/Kushalongit-hub" variant="gray">
                GITHUB
              </InteractiveBadge>
              <InteractiveBadge href="mailto:kushalonmsrit@gmail.com" variant="gray">
                EMAIL
              </InteractiveBadge>
              <InteractiveBadge href="/Kushal_Anvekar_Resume.pdf" target="_blank" rel="noopener noreferrer" variant="gray">
                RESUME PDF
              </InteractiveBadge>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

const TechStackView = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trackTop = rect.top;
      const trackHeight = rect.height;

      const scrolledIntoView = viewportHeight - trackTop;
      const scrollableDistance = trackHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolledIntoView / scrollableDistance));

      const cards = track.querySelectorAll('[data-card]');
      cards.forEach((card, index) => {
        const el = card as HTMLElement;
        const direction = index % 2 === 0 ? 1 : -1;
        const rotation = direction * (progress * 12);
        const translateX = direction * (progress * 140);
        const scale = 1 - progress * 0.05;
        const opacity = 1 - progress * 0.15;
        el.style.transform = `translate(-50%, -50%) translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`;
        el.style.opacity = opacity.toString();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { title: "Data Structures & Algorithms", accent: "border-[#ff5f56]" },
    { title: "Software Architecture", accent: "border-[#ffbd2e]" },
    { title: "Secure Application Practices", accent: "border-[#27c93f]" },
    { title: "Digital Signal Processing", accent: "border-[var(--bg-accent)]" },
  ];

  return (
    <div className="w-full min-h-screen relative z-10 bg-blueprint-grid">
      <div className="w-full max-w-7xl px-6 mb-12 flex flex-col items-center text-center relative z-20">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#525252] font-mono mb-4">
          -- SYSTEM.STACK.CORE
        </p>
        <h1 className="text-4xl md:text-6xl font-pixel text-white tracking-widest uppercase">
          Tech Stack
        </h1>
        <div className="w-16 h-1 bg-[var(--bg-accent)] mt-8"></div>
      </div>

      {/* Scroll Track */}
      <div ref={trackRef} className="relative w-full" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl px-6" style={{ height: "520px" }}>
            {cards.map((card, index) => (
              <div
                key={index}
                data-card
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full border-2 border-[#333] bg-[#0a0a0a] rounded-xl p-6 shadow-brutal-lg transition-all duration-75"
                style={{ zIndex: cards.length - index }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-3 w-3 rounded-full bg-[var(--bg-accent)]" />
                  <h2 className="text-xl md:text-2xl font-pixel text-white tracking-widest uppercase">
                    {card.title}
                  </h2>
                </div>
                <div className="w-12 h-1 bg-[var(--bg-accent)] mb-6" />

                {index === 0 && (
                  <div className="space-y-4 text-sm md:text-base text-[#E5E5E5] leading-relaxed">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">AI, Machine Learning & Inference</p>
                      <p>Frameworks & Architectures: PyTorch (LSTM, Neural Networks), Local RAG architectures, and LangGraph.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Tools & Platforms</p>
                      <p>Nvidia NIM, Google AI Studio, Claude, and Gemini.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Techniques</p>
                      <p>Prompt Engineering and Quantized deployment (Llama, Qwen 3).</p>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="space-y-4 text-sm md:text-base text-[#E5E5E5] leading-relaxed">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Cloud Hosting & Environments</p>
                      <p>Google Cloud Platform (GCP), Vercel, and Bare-metal deployment.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Containerization & CI/CD</p>
                      <p>Docker and GitHub Actions/Codespaces.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Operating Systems</p>
                      <p>Linux (custom kernels, CachyOS) and WSL.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Hardware Management</p>
                      <p>VRAM tuning, GPU undervolting, and RTX 50-series TGP management.</p>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="space-y-4 text-sm md:text-base text-[#E5E5E5] leading-relaxed">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Core Languages</p>
                      <p>Python, Java, JavaScript/TypeScript, and Rust.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Basic Knowledge</p>
                      <p>Go.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Frameworks</p>
                      <p>React and Three.js.</p>
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="space-y-4 text-sm md:text-base text-[#E5E5E5] leading-relaxed">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Databases</p>
                      <p>Supabase and SQL.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--bg-accent)] mb-1">Workflow Automation</p>
                      <p>n8n Workflow Automation.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl relative z-10 mt-12">
        <div className="flex justify-center">
          <InteractiveBadge href="#" variant="gray" onClick={() => onNavigate("contact")}>
            CONTACT
          </InteractiveBadge>
        </div>
      </div>
    </div>
  );
};

const TypingTagline = () => {
  const text = "Building AI-driven systems & resilient automations.";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-sm md:text-base font-mono text-[var(--bg-accent)] mt-3 h-5">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
};

const ProjectsView = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const projects = [
    {
      title: "try_on",
      subtitle: "readme",
      name: "Try-On Virtual Exhibition",
      tech: "PyTorch / Vercel / Supabase",
      description:
        "Try-On the Virtual Exhibition is a cutting-edge web application that enables users to virtually try on fashion and beauty products using AI-powered image generation. Built for college exhibitions, this system provides an immersive experience where students can upload photos or use their camera to see how different products look on them in real-time.",
      href: "https://github.com/Kushalongit-hub/Try-On",
    },
    {
      title: "vakil_ai",
      subtitle: "readme",
      name: "Vakil-ai",
      tech: "Legal Assistant",
      description:
        "Vakil AI - India's First Free Legal Drafting Assistant. Vakil AI is a free, open-source, RAG-powered legal assistant designed specifically for Indian lawyers. It helps with legal research, document drafting, and navigating the new criminal laws (BNS, BNSS, BSA).",
      href: "https://github.com/Kushalongit-hub/Vakil-ai",
    },
    {
      title: "yt-dlp",
      subtitle: "readme",
      name: "YT-DLP",
      tech: "Python / CustomTkinter / yt-dlp",
      description:
        "A modular YouTube/video downloader with a headless Python backend (yt-dlp wrapper) and a dark-mode CustomTkinter GUI. Supports CLI and GUI modes, quality/format selection, progress hooks, and ffmpeg validation.",
      href: "https://github.com/Kushalongit-hub/Simple_YT_DLP",
    },
    {
      title: "ai_video_editor",
      subtitle: "readme",
      name: "AI Powered Video Editor",
      tech: "Ongoing",
      description:
        "An AI-powered video editor currently in development. Designed to automate editing workflows using ML-assisted scene detection, transcription-driven cuts, and intelligent media assembly. This project is actively being built and is not yet released.",
      href: "https://github.com/Kushalongit-hub",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(520);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll('[data-slot-card]');
      let maxHeight = 0;
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        if (rect.height > maxHeight) maxHeight = rect.height;
      });
      if (maxHeight > 0) {
        setCardHeight(maxHeight);
      }
    }
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] flex flex-col items-center pt-20 pb-40">
      {/* Master Page Header */}
      <div className="w-full max-w-7xl px-6 mb-12 flex flex-col items-center text-center relative z-20">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#525252] font-mono mb-4">
          -- SYSTEM.DIRECTORY.ACCESS
        </p>
        <h1 className="text-4xl md:text-6xl font-pixel text-white tracking-widest uppercase">
          Projects
        </h1>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-[var(--bg-accent)] mt-8"></div>
      </div>

      {/* Dev Environment Header */}
      <div className="w-full max-w-7xl mb-8">
        <div className="flex items-center justify-between border-b border-[#333] px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs font-mono text-[#525252] ml-2">
              projects/
            </span>
          </div>
          <div className="text-xs font-mono text-[#525252]">
            v1.0.0
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-6 relative">
        <ShaderBackground />
        {/* Monitor Frame - Desktop Only */}
        <div className="hidden md:block relative bg-[#050505] border-4 border-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: "0 0 0 2px #262626, 0 25px 50px -12px rgba(0, 0, 0, 0.8)",
          minHeight: "900px",
        }}
      >
        {/* Screen Glow / Scanlines */}
        <div className="absolute inset-0 pointer-events-none z-50 opacity-20"
          style={{
            background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />

        {/* Monitor Stand / Bezel Accent */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#262626] rounded-full z-50" />

        {/* Inner Screen */}
        <div className="relative w-full h-full" style={{ minHeight: "900px" }}>
          {/* Top Left - Try-On */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-8 left-8 w-[42%]"
            style={{ transform: "rotate(-2deg)", zIndex: 10 }}
          >
            <TerminalWindow title={projects[0].title} subtitle={projects[0].subtitle} variant="windows">
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {projects[0].name}
                  </h3>
                  <p className="text-xs text-[#525252] font-mono">
                    {projects[0].tech}
                  </p>
                </div>
                <p>{projects[0].description}</p>
                <div>
                  <InteractiveBadge href={projects[0].href} variant="gray">
                    GITHUB
                  </InteractiveBadge>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Top Right - Vakil-ai */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 right-8 w-[42%]"
            style={{ transform: "rotate(2deg)", zIndex: 20 }}
          >
            <TerminalWindow title={projects[1].title} subtitle={projects[1].subtitle} variant="windows">
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {projects[1].name}
                  </h3>
                  <p className="text-xs text-[#525252] font-mono">
                    {projects[1].tech}
                  </p>
                </div>
                <p>{projects[1].description}</p>
                <div>
                  <InteractiveBadge href={projects[1].href} variant="gray">
                    GITHUB
                  </InteractiveBadge>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Bottom Left - Simple YT-DLP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[48%] left-12 w-[38%]"
            style={{ transform: "rotate(1.5deg)", zIndex: 30 }}
          >
            <TerminalWindow title={projects[2].title} subtitle={projects[2].subtitle} variant="windows">
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {projects[2].name}
                  </h3>
                  <p className="text-xs text-[#525252] font-mono">
                    {projects[2].tech}
                  </p>
                </div>
                <p>{projects[2].description}</p>
                <div>
                  <InteractiveBadge href={projects[2].href} variant="gray">
                    GITHUB
                  </InteractiveBadge>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Bottom Right - AI Video Editor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-[52%] right-12 w-[38%]"
            style={{ transform: "rotate(-1.5deg)", zIndex: 40 }}
          >
            <TerminalWindow title={projects[3].title} subtitle={projects[3].subtitle} variant="windows">
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {projects[3].name}
                  </h3>
                  <p className="text-xs text-[#525252] font-mono">
                    {projects[3].tech}
                  </p>
                </div>
                <p>{projects[3].description}</p>
                <div>
                  <InteractiveBadge href={projects[3].href} variant="gray">
                    GITHUB
                  </InteractiveBadge>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>

      {/* Mobile Slot Machine */}
      <div className="md:hidden w-full">
        <div ref={cardsContainerRef} className="overflow-hidden relative px-6" style={{ height: `${cardHeight}px` }}>
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * cardHeight}px)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                data-slot-card
                className="border border-[#333] bg-[#0a0a0a] rounded-lg overflow-hidden"
              >
                <TerminalWindow title={project.title} subtitle={project.subtitle} variant="windows">
                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#525252] font-mono">
                        {project.tech}
                      </p>
                    </div>
                    <p>{project.description}</p>
                    <div>
                      <InteractiveBadge href={project.href} variant="gray">
                        GITHUB
                      </InteractiveBadge>
                    </div>
                  </div>
                </TerminalWindow>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="border-2 border-brand-black px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none bg-brand-gray text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-white">
            {currentIndex + 1} / {projects.length}
          </span>
          <button
            onClick={() => setCurrentIndex(prev => Math.min(projects.length - 1, prev + 1))}
            disabled={currentIndex === projects.length - 1}
            className="border-2 border-brand-black px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none bg-[var(--bg-accent)] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="w-full max-w-7xl px-6 mt-12">
        <div className="flex justify-center">
                <InteractiveBadge href="#" variant="gray" onClick={() => onNavigate("contact")}>
            CONTACT
          </InteractiveBadge>
        </div>
      </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeView, setActiveView] = useState("hero");
  const [isDark, setIsDark] = useState(false);
  const isTransitioning = useRef(false);
  const activeViewRef = useRef(activeView);
  const transitionTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    activeViewRef.current = activeView;
  }, [activeView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning.current) return;

      const current = activeViewRef.current;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (current === "hero") {
          isTransitioning.current = true;
          setActiveView("techstack");
        } else if (current === "techstack") {
          isTransitioning.current = true;
          setActiveView("projects");
        } else if (current === "projects") {
          isTransitioning.current = true;
          setActiveView("research");
        } else if (current === "research") {
          isTransitioning.current = true;
          setActiveView("contact");
        }
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (current === "contact") {
          isTransitioning.current = true;
          setActiveView("research");
        } else if (current === "research") {
          isTransitioning.current = true;
          setActiveView("projects");
        } else if (current === "projects") {
          isTransitioning.current = true;
          setActiveView("techstack");
        } else if (current === "techstack") {
          isTransitioning.current = true;
          setActiveView("hero");
        } else if (current === "hero" && window.scrollY > 100) {
          window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
          return;
        }
      }

      if (isTransitioning.current) {
        if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = window.setTimeout(() => {
          isTransitioning.current = false;
        }, 600);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;

      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const current = activeViewRef.current;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      const atTop = window.scrollY <= 10;

      if (e.deltaY > 0 && current === "hero" && atBottom) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("techstack");
      } else if (e.deltaY > 0 && current === "techstack" && atBottom) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("projects");
      } else if (e.deltaY > 0 && current === "projects" && atBottom) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("research");
      } else if (e.deltaY > 0 && current === "research" && atBottom) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("contact");
      } else if (e.deltaY < 0 && current === "contact" && atTop) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("research");
      } else if (e.deltaY < 0 && current === "research" && atTop) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("projects");
      } else if (e.deltaY < 0 && current === "projects" && atTop) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("techstack");
      } else if (e.deltaY < 0 && current === "techstack" && atTop) {
        if (!isTouchDevice) e.preventDefault();
        isTransitioning.current = true;
        setActiveView("hero");
      }

      if (isTransitioning.current) {
        if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = window.setTimeout(() => {
          isTransitioning.current = false;
        }, 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  return (
    <main className={`w-full min-h-screen relative ${isDark ? "text-white" : "text-black"}`} style={{ background: isDark ? "#0a0a0a" : "#F0F0F0" }}>
      <AnimatePresence mode="wait">
        {activeView === "hero" && (
          <motion.div
            key="hero-view"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full min-h-screen relative z-10 bg-blueprint-grid"
          >
            <ReticleOverlay />

            <nav className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-brand-black bg-white px-6 py-4 shadow-brutal gap-3 md:gap-0">
              <div className="text-lg font-bold uppercase tracking-widest">
                Kushal<span className="text-accent">.exe</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                <InteractiveBadge href="https://github.com/Kushalongit-hub">
                  GITHUB
                </InteractiveBadge>
                <InteractiveBadge href="#" variant="gray" onClick={() => setActiveView("techstack")}>
                  TECH STACK
                </InteractiveBadge>
                <InteractiveBadge href="#research" variant="gray" onClick={() => setActiveView("research")}>
                  RESEARCH
                </InteractiveBadge>
                <InteractiveBadge href="/Kushal_Anvekar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  RESUME PDF
                </InteractiveBadge>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="border-2 border-brand-black px-4 py-2 md:px-3 md:py-1 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none bg-[var(--bg-accent)] text-white"
                >
                  {isDark ? "LIGHT" : "DARK"}
                </button>
              </div>
            </nav>

            <section className="relative mx-auto max-w-6xl px-6 py-24">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl font-pixel uppercase leading-none tracking-widest break-words md:text-6xl">
                    KUSHAL 
                    M
                    <br />
                    ANVEKAR
                  </h1>
                  <TypingTagline />
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
                          <span className="opacity-50">status:</span>{" "}
                          <span className="animate-pulse">SEEKING TECHNOLOGY INTERNSHIP</span>
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

            {/* Keyboard Hints */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-4 text-xs font-mono text-[#525252]">
              <span className="border border-[#333] rounded px-2 py-1">↑↓</span>
              <span>Navigate</span>
              <span className="border border-[#333] rounded px-2 py-1">Scroll</span>
              <span>Explore</span>
            </div>
          </motion.div>
        )}

        {activeView === "techstack" && (
          <motion.div
            key="techstack-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full min-h-screen relative z-10"
          >
            <TechStackView onNavigate={setActiveView} />
          </motion.div>
        )}

        {activeView === "projects" && (
          <motion.div
            key="projects-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full min-h-screen relative z-10 bg-blueprint-grid"
          >
            <ProjectsView onNavigate={setActiveView} />
            <div className="w-full max-w-7xl relative z-10 mt-12">
              <div className="flex justify-center gap-3">
                <InteractiveBadge href="#" variant="gray" onClick={() => setActiveView("research")}>
                  RESEARCH
                </InteractiveBadge>
                <InteractiveBadge href="#" variant="gray" onClick={() => setActiveView("contact")}>
                  CONTACT
                </InteractiveBadge>
              </div>
            </div>
          </motion.div>
        )}

        {activeView === "research" && (
          <motion.div
            key="research-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
             className="w-full min-h-screen relative z-10 bg-blueprint-grid"
          >
            <ResearchView isDark={isDark} />
          </motion.div>
        )}

        {activeView === "contact" && (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full min-h-screen relative z-10"
          >
            <ContactView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-3 border-2 border-brand-black bg-white px-4 py-2 shadow-brutal">
        <button
          onClick={() => {
            if (activeView === "projects") setActiveView("techstack");
            else if (activeView === "research") setActiveView("projects");
            else if (activeView === "contact") setActiveView("research");
            else if (activeView === "techstack") setActiveView("hero");
          }}
          className="border-2 border-brand-black px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none bg-brand-gray text-black"
        >
          Prev
        </button>
        <span className="text-xs font-mono uppercase tracking-widest">
          {activeView}
        </span>
        <button
          onClick={() => {
            if (activeView === "hero") setActiveView("techstack");
            else if (activeView === "techstack") setActiveView("projects");
            else if (activeView === "projects") setActiveView("research");
            else if (activeView === "research") setActiveView("contact");
          }}
          className="border-2 border-brand-black px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none bg-[var(--bg-accent)] text-white"
        >
          Next
        </button>
      </div>
    </main>
  );
}
