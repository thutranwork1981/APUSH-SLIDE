const base = import.meta.env.BASE_URL;

export default function Ultimatum() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <video src={`${base}kling.mp4`} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.14]" onEnded={(e) => e.currentTarget.pause()} />
      <div className="absolute inset-0 bg-bg/70" />
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Origin — The Offer</span>
        <span>03 — 12</span>
      </div>
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] grid grid-cols-2 gap-[5vw]">
        <div>
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2.5vh]">Chapter 02 — Jul 2025 / Feb 2026</div>
          <div className="font-display text-[4.2vw] leading-[0.96] tracking-tight">The</div>
          <div className="font-display text-[7vw] leading-[0.92] tracking-tighter">$200M</div>
          <div className="font-display italic text-[4.2vw] leading-[0.96] tracking-tight">Ultimatum.</div>
        </div>
        <div className="pt-[4vh]">
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[1.8vh]">Principals</div>
          <div className="border-t border-rule pt-[1.8vh] mb-[2vh]"><div className="text-[1.4vw] font-medium">Demand</div><div className="text-[1.2vw] text-text/75 mt-[0.5vh] leading-snug max-w-[28vw]">Lift Anthropic's hard limits on autonomous lethality and mass surveillance.</div></div>
          <div className="border-t border-rule pt-[1.8vh] mb-[2vh]"><div className="text-[1.4vw] font-medium">Leverage</div><div className="text-[1.2vw] text-text/75 mt-[0.5vh] leading-snug max-w-[28vw]">$200M federal pipeline conditioned on full compliance.</div></div>
          <div className="border-t border-b border-rule pt-[1.8vh] pb-[1.8vh]"><div className="text-[1.4vw] font-medium">Reprisal</div><div className="text-[1.2vw] text-text/75 mt-[0.5vh] leading-snug max-w-[28vw]">Refusal triggers blacklist designation and contract revocation.</div></div>
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Origin</span>
        <span>03 · The Ultimatum</span>
      </div>
    </div>
  );
}
