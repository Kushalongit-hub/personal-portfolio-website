import { ReactNode } from "react";

export default function DataComparisonBox({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="border-2 border-brand-black bg-brand-gray p-4 shadow-brutal">
        <div className="mb-2 text-xs font-bold uppercase tracking-widest">
          [Input]
        </div>
        <div className="text-sm">{left}</div>
      </div>
      <div className="border-2 border-brand-black bg-white p-4 shadow-brutal">
        <div className="mb-2 text-xs font-bold uppercase tracking-widest">
          [Output]
        </div>
        <div className="text-sm">{right}</div>
      </div>
    </div>
  );
}
