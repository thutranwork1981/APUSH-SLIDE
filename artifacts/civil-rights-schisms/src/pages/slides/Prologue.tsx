const base = import.meta.env.BASE_URL;

export default function Prologue() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>The Civil Rights Schisms</span>
        <span>01 — 12</span>
      </div>
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] flex items-start justify-between gap-[4vw]">
        <div className="w-[50%] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2.5vh]">A Briefing — Pentagon Deals, 2026</div>
          <h1 className="font-display text-[5vw] leading-[0.96] tracking-tight">On quiet</h1>
          <h1 className="font-display italic text-[5vw] leading-[0.96] tracking-tight">ground,</h1>
          <h1 className="font-display text-[5vw] leading-[0.96] tracking-tight">a fracture.</h1>
          <p className="mt-[2.8vh] text-[1.4vw] leading-relaxed text-text/80 max-w-[32vw]">A field, untouched. A policy, undone. The story of the year frontier AI met the United States military.</p>
        </div>
        <div className="w-[38vw] h-[23vw] bg-rule/25 overflow-hidden relative border border-rule">
          <video src={`${base}intro.mp4`} autoPlay muted playsInline className="w-full h-full object-cover" onEnded={(e) => e.currentTarget.pause()} />
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Prologue</span>
        <span>Team Duckiez · 2026</span>
      </div>
    </div>
  );
}
