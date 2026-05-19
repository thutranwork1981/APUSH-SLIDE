const base = import.meta.env.BASE_URL;

export default function Prologue() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      {/* Outline frame */}
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>The Civil Rights Schisms</span>
        <span>01 — 12</span>
      </div>

      {/* Main content row */}
      <div className="absolute top-[22vh] left-[6vw] right-[6vw] flex items-start justify-between gap-[4vw]">
        {/* Left column: title */}
        <div className="w-[44%] flex flex-col">
          <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[3vh]">
            A Briefing — Pentagon Deals, 2026
          </div>
          <h1 className="font-hero italic font-black text-[7.5vw] leading-[0.95] tracking-tight text-text">
            On quiet
          </h1>
          <h1 className="font-hero italic font-black text-[7.5vw] leading-[0.95] tracking-tight text-text">
            ground,
          </h1>
          <h1 className="font-hero italic font-black text-[7.5vw] leading-[0.95] tracking-tight text-text">
            a fracture.
          </h1>
          <p className="mt-[3vh] text-[1.45vw] leading-relaxed text-text/80 max-w-[32vw] italic font-display">
            A field, untouched. A policy, undone. The story of the year frontier AI met the United States military.
          </p>
        </div>

        {/* Right column: autoplay video, no controls, no loop */}
        <div className="w-[44%] aspect-[16/10] bg-rule/30 overflow-hidden relative">
          <video
            src={`${base}intro.mp4`}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={(e) => e.currentTarget.pause()}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Prologue</span>
        <span>Team Duckiez · 2026</span>
      </div>
    </div>
  );
}
