export default function ReticleOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-brand-black" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-brand-black" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-l-2 border-b-2 border-brand-black" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-brand-black" />
    </div>
  );
}
