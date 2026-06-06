"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-[#1C1917] bg-[#C4A882] hover:bg-[#A08855] text-xs tracking-widest uppercase font-sans px-4 py-2 transition-colors"
    >
      Print / Save PDF
    </button>
  );
}
