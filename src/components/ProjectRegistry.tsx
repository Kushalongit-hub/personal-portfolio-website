export default function ProjectRegistry() {
  const cards = [
    { label: "REPOSITORY", icon: "📁" },
    { label: "LIVE DEMO", icon: "🔗" },
    { label: "ARCHITECTURE", icon: "🖥️" },
    { label: "SUPABASE DB", icon: "🗄️" },
  ];

  return (
    <section className="w-full bg-registry-bg text-[#A3A3A3] pt-24 pb-32 flex justify-center">
      <div className="w-full max-w-[800px] px-6">
        <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
          MANAGE / PROJECTS
        </div>
        <h2 className="font-pixel mt-4 text-4xl text-white">
          Try-On Virtual Exhibition
        </h2>
        <p className="mt-4 text-sm leading-relaxed">
          Record changes save straight to the registry. Containerized backend
          services with serverless low-latency inference.
        </p>

        <div className="mt-10 border-t border-x border-registry-border rounded-t-md p-6">
          <div className="text-xs font-mono text-neutral-500">
            registry/projects/try_on_model.json
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="font-pixel text-2xl text-white">
              Try-On Virtual Exhibition
            </h3>
            <span className="border border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {" "}
              • ACTIVE
            </span>
          </div>

          <div className="mt-6 text-sm text-neutral-400">
            Where does this process execute?
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 border-y border-registry-border">
            {cards.map((card) => (
              <div
                key={card.label}
                className="border-r border-registry-border last:border-r-0 flex flex-col items-center justify-center gap-2 hover:bg-white/5 cursor-pointer transition-colors h-24"
              >
                <span className="text-lg">{card.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Project configuration details
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              Override any parameter below. Blank falls back to default inference
              settings.
            </p>

            <div className="mt-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                tech_stack
              </label>
              <div className="mt-2 w-full bg-[#171717] border border-registry-border p-3 rounded text-white font-mono text-sm">
                PyTorch, Vercel, Supabase
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                model_objective
              </label>
              <div className="mt-2 w-full bg-[#171717] border border-registry-border p-3 rounded text-white font-mono text-sm">
                Fashion and beauty product visual rendering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
