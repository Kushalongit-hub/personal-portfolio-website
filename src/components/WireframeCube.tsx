export default function WireframeCube() {
  return (
    <div className="hidden lg:block absolute bottom-16 right-16 h-32 w-32">
      <div className="relative h-full w-full" style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            animation: "spin-slow 10s linear infinite",
          }}
        >
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "translateZ(4rem)" }} />
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "rotateY(180deg) translateZ(4rem)" }} />
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "rotateY(-90deg) translateZ(4rem)" }} />
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "rotateY(90deg) translateZ(4rem)" }} />
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "rotateX(90deg) translateZ(4rem)" }} />
          <div className="absolute h-full w-full border-2 border-dashed border-brand-black shadow-[inset_0_0_10px_rgba(255,85,0,0.5)]" style={{ transform: "rotateX(-90deg) translateZ(4rem)" }} />
        </div>
      </div>
    </div>
  );
}
