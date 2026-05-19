export default function CitizenVsGov() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Tension — Two Frames</span>
        <span>10 — 12</span>
      </div>

      <div className="absolute top-[14vh] left-[6vw] right-[6vw]">
        <div className="text-[1.2vw] tracking-[0.22em] uppercase text-muted">Diff — Guardrails</div>
        <h1 className="font-display italic text-[5vw] leading-[1] tracking-tight mt-[1vh]">
          Citizen vs. Government.
        </h1>
      </div>

      <div className="absolute top-[34vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-2 gap-[5vw]">
        {/* Citizen */}
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Citizen</div>
          <div className="font-display text-[3.4vw] leading-tight mt-[0.6vh]">"Safety &amp; Privacy."</div>
          <div className="mt-[2.5vh] text-[1.4vw] text-text/85 leading-snug">
            Autonomous lethal decisions outpace existing oversight.
          </div>
          <div className="mt-[1.5vh] text-[1.4vw] text-text/85 leading-snug">
            Mass surveillance tooling rarely stays pointed outward.
          </div>
          <div className="mt-[1.5vh] text-[1.4vw] text-text/85 leading-snug">
            Vendor 'hard limits' were a check the public never voted on.
          </div>
          <div className="mt-auto pt-[3vh] flex items-baseline gap-[1.5vw]">
            <div className="text-[1vw] tracking-[0.28em] uppercase text-muted">Frame</div>
            <div className="font-display italic text-[2vw]">Rights &amp; Restraint</div>
          </div>
        </div>

        {/* Government */}
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Government</div>
          <div className="font-display text-[3.4vw] leading-tight mt-[0.6vh]">"All Lawful Use."</div>
          <div className="mt-[2.5vh] text-[1.4vw] text-text/85 leading-snug">
            National security cannot wait for vendor approval cycles.
          </div>
          <div className="mt-[1.5vh] text-[1.4vw] text-text/85 leading-snug">
            Military authority — not a model card — defines lawful action.
          </div>
          <div className="mt-[1.5vh] text-[1.4vw] text-text/85 leading-snug">
            Strategic parity with adversaries demands unrestricted tooling.
          </div>
          <div className="mt-auto pt-[3vh] flex items-baseline gap-[1.5vw]">
            <div className="text-[1vw] tracking-[0.28em] uppercase text-muted">Frame</div>
            <div className="font-display italic text-[2vw]">Sovereignty &amp; Speed</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Tension — End of Briefing</span>
        <span>10 · Citizen vs. Government</span>
      </div>
    </div>
  );
}
