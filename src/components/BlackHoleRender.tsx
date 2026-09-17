export default function BlackHoleRender() {
  return (
    <div className="hidden lg:block absolute bottom-16 right-16 w-64 h-64">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "500px" }}
        >
          <div
            className="absolute w-52 h-52 rounded-full border-2 border-accent"
            style={{ animation: "spin-disk 8s linear infinite" }}
          />
          <div
            className="absolute w-44 h-44 rounded-full border-2 border-accent"
            style={{ animation: "spin-disk 12s linear infinite reverse" }}
          />
          <div
            className="absolute w-36 h-36 rounded-full border-2 border-accent"
            style={{ animation: "spin-disk 16s linear infinite" }}
          />
        </div>

        <div className="relative w-32 h-32 rounded-full bg-black border-2 border-dashed border-accent shadow-[inset_0_0_15px_rgba(255,85,0,0.4)] z-20" />

        <div
          className="absolute left-1/2 -translate-x-1/2 w-44 h-24 z-30 border-t-4 border-accent rounded-t-full"
          style={{ top: "calc(50% - 64px + 20px)", animation: "marquee-dashed 4s ease-in-out infinite" }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 w-44 h-24 z-30 border-b-4 border-accent rounded-b-full"
          style={{ top: "calc(50% + 64px - 20px)", animation: "marquee-dashed 4s ease-in-out infinite" }}
        />

        <div className="absolute -bottom-6 right-0 text-xs text-accent">
          [OBJ_CLASS: SINGULARITY]
        </div>
      </div>
    </div>
  );
}
