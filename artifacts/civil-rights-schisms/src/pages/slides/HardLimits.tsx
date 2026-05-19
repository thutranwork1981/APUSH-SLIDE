export default function HardLimits() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Refusal — The Hard Limits</span>
        <span>04 — 12</span>
      </div>
      <div className="absolute top-[16vh] left-[6vw] right-[6vw] grid grid-cols-[1.35fr_1fr] gap-[5vw]">
        <div>
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">Anthropic — Public Usage Policy</div>
          <h1 className="font-display text-[5vw] leading-[0.96] tracking-tight">The Hard</h1>
          <h1 className="font-display italic text-[5vw] leading-[0.96] tracking-tight mb-[3vh]">Limits.</h1>
          <div className="border-t border-rule pt-[2vh] mb-[2vh]">
            <div className="flex gap-[1.2vw]">
              <div className="font-display text-[1.8vw] text-accent w-[2.5vw]">I.</div>
              <div>
                <div className="text-[1.5vw] font-medium">No Autonomous Weapons</div>
                <div className="text-[1.25vw] text-text/75 mt-[0.5vh] leading-snug max-w-[30vw]">Claude cannot be deployed for fully autonomous lethal decisions. Human-in-the-loop, always.</div>
              </div>
            </div>
          </div>
          <div className="border-t border-rule pt-[2vh]">
            <div className="flex gap-[1.2vw]">
              <div className="font-display text-[1.8vw] text-accent w-[2.5vw]">II.</div>
              <div>
                <div className="text-[1.5vw] font-medium">No Mass Surveillance</div>
                <div className="text-[1.25vw] text-text/75 mt-[0.5vh] leading-snug max-w-[30vw]">Claude will not be turned on the population. No untargeted, large-scale surveillance — foreign or domestic.</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[1.5vh]">References</div>
          <div className="font-display text-[2.3vw] leading-tight mb-[2.2vh]">Sources.</div>
          <div className="border-t border-rule py-[1.4vh]"><div className="text-[1vw] tracking-[0.22em] uppercase text-muted">01 · CNN</div><div className="text-[1.2vw] text-text/80 mt-[0.4vh]">Pentagon AI / Anthropic, 2026</div></div>
          <div className="border-t border-rule py-[1.4vh]"><div className="text-[1vw] tracking-[0.22em] uppercase text-muted">02 · NPR</div><div className="text-[1.2vw] text-text/80 mt-[0.4vh]">Trump, Anthropic, Pentagon, OpenAI — AI Weapons Ban</div></div>
          <div className="border-t border-rule py-[1.4vh]"><div className="text-[1vw] tracking-[0.22em] uppercase text-muted">03 · Forbes</div><div className="text-[1.2vw] text-text/80 mt-[0.4vh]">OpenAI, Nvidia, Alphabet Sign Pentagon AI Deal</div></div>
          <div className="border-t border-b border-rule py-[1.4vh]"><div className="text-[1vw] tracking-[0.22em] uppercase text-muted">04 · NY Times</div><div className="text-[1.2vw] text-text/80 mt-[0.4vh]">Pentagon AI Companies Deals, May 2026</div></div>
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Refusal</span>
        <span>04 · The Hard Limits</span>
      </div>
    </div>
  );
}
