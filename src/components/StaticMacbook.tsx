"use client";

export default function StaticMacbook({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-[#010101] rounded-2xl p-2 border border-[#262626]">
        <div className="relative aspect-video bg-[#272729] rounded-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2 bg-[#050505] rounded-b-xl p-4">
          <div className="flex justify-center gap-1">
            <div className="w-full max-w-4xl h-2 bg-[#171717] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
