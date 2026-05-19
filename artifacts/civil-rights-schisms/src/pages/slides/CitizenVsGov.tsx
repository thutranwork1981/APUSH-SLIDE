export default function CitizenVsGov() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Tension — Two Frames</span>
        <span>10 — 12</span>
      </div>
      <div className="absolute top-[14vh] left-[6vw] right-[6vw]"><div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">Diff — Guardrails</div><h1 className="font-display italic text-[4.6vw] leading-[1] tracking-tight mt-[1vh]">Citizen vs. Government.</h1></div>
      <div className="absolute top-[34vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-2 gap-[5vw]">
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Citizen</div>
          <div className="font-display text-[2.8vw] leading-tight mt-[0.8vh]">Safety &amp; Privacy.</div>
          <div className="mt-[2.2vh] text-[1.25vw] text-text/85 leading-snug">Autonomous lethal decisions outpace existing oversight.</div>
          <div className="mt-[1.2vh] text-[1.25vw] text-text/85 leading-snug">Mass surveillance tooling rarely stays pointed outward.</div>
          <div className="mt-[1.2vh] text-[1.25vw] text-text/85 leading-snug">Vendor hard limits were a check the public never voted on.</div>
        </div>
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Government</div>
          <div className="font-display text-[2.8vw] leading-tight mt-[0.8vh]">All Lawful Use.</div>
          <div className="mt-[2.2vh] text-[1.25vw] text-text/85 leading-snug">National security cannot wait for vendor approval cycles.</div>
          <div className="mt-[1.2vh] text-[1.25vw] text-text/85 leading-snug">Military authority — not a model card — defines lawful action.</div>
          <div className="mt-[1.2vh] text-[1.25vw] text-text/85 leading-snug">Strategic parity with adversaries demands unrestricted tooling.</div>
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Tension — End of Briefing</span>
        <span>10 · Citizen vs. Government</span>
      </div>
    </div>
  );
}
