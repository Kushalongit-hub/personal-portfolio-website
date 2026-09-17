export default function BlackHoleVideo() {
  return (
    <div className="relative w-full max-w-[380px] border-2 border-black bg-black shadow-[6px_6px_0px_0px_#000000]">
      <div className="border-b-2 border-black bg-[var(--bg-base)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider flex justify-between items-center text-black">
        <span>[SIMULATION // GARGANTUA]</span>
        <span className="text-[var(--bg-accent)] font-mono animate-pulse">● LIVE_FEED</span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
        <video
          src="/blackhole.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-screen"
        />

        <div className="absolute top-2 left-2 text-[10px] font-mono text-[var(--bg-accent)] opacity-80 pointer-events-none">
          RA: 13h 25m | DEC: -11°
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white opacity-60 pointer-events-none">
          MASS: 100M_SOLAR
        </div>
      </div>

      <div className="border-t-2 border-black bg-[var(--bg-base)] p-2 text-[10px] font-mono text-black flex justify-between">
        <span>STATUS: EVENT_HORIZON_STABLE</span>
        <span>CTRL_ID: #00-GARG</span>
      </div>
    </div>
  );
}
