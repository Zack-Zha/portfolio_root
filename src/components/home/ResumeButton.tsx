import { useRef, useState, useCallback } from 'react';

export default function ResumeButton() {
  const btnRef = useRef<HTMLDivElement>(null);
  const ttRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = btnRef.current?.getBoundingClientRect();
      const tt = ttRef.current;
      if (!rect || !tt) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const tH = tt.offsetHeight;
      const tW = tt.offsetWidth;
      setPos({
        left: x - tW / 2,
        top: y - tH / 2,
      });
    },
    []
  );

  return (
    <div
      ref={btnRef}
      id="resumeBtn"
      onMouseMove={handleMouseMove}
      className="relative group w-[120px] h-[120px] rounded-[60px] bg-white/50 border border-white flex items-center justify-center shrink-0 hover:cursor-[none] transition-colors duration-[400ms] ease-[cubic-bezier(.4,0,.2,1)] hover:bg-white/20"
    >
      <svg height="43" viewBox="0 0 24 24" fill="none" className="opacity-40">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="black" strokeWidth="1.5"></rect>
        <line x1="8" y1="8" x2="16" y2="8" stroke="black" strokeWidth="1.5"></line>
        <line x1="8" y1="12" x2="16" y2="12" stroke="black" strokeWidth="1.5"></line>
        <line x1="8" y1="16" x2="13" y2="16" stroke="black" strokeWidth="1.5"></line>
      </svg>
      <div
        ref={ttRef}
        id="resumeTooltip"
        className="rounded-[100px] pointer-events-none absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-[4px] px-[12px] py-[12px] text-white text-[16px] font-['Geist'] font-normal whitespace-nowrap opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:opacity-100"
        style={pos ? { left: `${pos.left}px`, top: `${pos.top}px` } : undefined}
      >
        Unavailable
      </div>
    </div>
  );
}
