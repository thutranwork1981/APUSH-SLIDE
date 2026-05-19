export default function Blacklist() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Reprisal — Supply Chain Risk</span>
        <span>05 — 12</span>
      </div>
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] grid grid-cols-2 gap-[5vw]">
        <div>
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">Lawsuit, Case Tracking</div>
          <h1 className="font-display text-[5.8vw] leading-[0.96] tracking-tight">The</h1>
          <h1 className="font-display italic text-[5.8vw] leading-[0.96] tracking-tight">Blacklist.</h1>
          <p className="mt-[2.5vh] text-[1.45vw] leading-relaxed text-text/80 max-w-[34vw]">A federal designation: Supply Chain Risk. The court paused it. The underlying question remains live.</p>
        </div>
        <div>
          <div className="text-[1vw] tracking-[0.22em] uppercase text-muted mb-[1.5vh]">Case File</div>
          <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[1.4vh] border-t border-rule pt-[2vh]">
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Case No.</div><div className="font-display text-[1.7vw] mt-[0.3vh]">ND-Cal-2026-0317</div></div>
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Venue</div><div className="font-display text-[1.7vw] mt-[0.3vh]">U.S.D.C. N.D. Cal</div></div>
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Filed</div><div className="font-display text-[1.7vw] mt-[0.3vh]">March 2026</div></div>
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Relief</div><div className="font-display text-[1.7vw] mt-[0.3vh]">Prelim. Injunction</div></div>
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Status</div><div className="font-display text-[1.7vw] mt-[0.3vh]">Blacklist Paused</div></div>
            <div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Jurisdiction</div><div className="font-display text-[1.7vw] mt-[0.3vh]">Federal, Art. III</div></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Reprisal</span>
        <span>05 · The Blacklist</span>
      </div>
    </div>
  );
}
