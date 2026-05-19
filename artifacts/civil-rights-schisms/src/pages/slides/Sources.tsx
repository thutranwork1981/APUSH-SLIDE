export default function Sources() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Pivot — The Data</span>
        <span>07 — 12</span>
      </div>
      <div className="absolute top-[14vh] left-[6vw] right-[6vw]"><div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">Sources Analysis</div><h1 className="font-display italic text-[4.6vw] leading-[1] tracking-tight mt-[1vh]">Four desks, one fracture.</h1></div>
      <div className="absolute top-[33vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-2 grid-rows-2 gap-x-[4vw] gap-y-[2.4vh] text-[1.25vw]">
        <div className="border-t border-rule pt-[1.4vh]"><div className="flex items-baseline justify-between"><div className="font-display text-[2vw]">CNN</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Tony</div></div><div className="text-text/80 mt-[0.8vh] leading-snug">The Trump administration blacklisted Anthropic as a "supply chain risk" after it refused to drop Claude's safety guardrails for military use. Anthropic sued and won a temporary pause.</div></div>
        <div className="border-t border-rule pt-[1.4vh]"><div className="flex items-baseline justify-between"><div className="font-display text-[2vw]">NPR</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Derek</div></div><div className="text-text/80 mt-[0.8vh] leading-snug">Sec. Hegseth gave Anthropic a $200M ultimatum: strip the safety guardrails or face a total ban. Anthropic's CEO refused.</div></div>
        <div className="border-t border-rule pt-[1.4vh]"><div className="flex items-baseline justify-between"><div className="font-display text-[2vw]">Forbes</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Adam</div></div><div className="text-text/80 mt-[0.8vh] leading-snug">OpenAI, Nvidia, Alphabet, SpaceX, and Amazon quickly signed classified Pentagon contracts while Anthropic fought the ban.</div></div>
        <div className="border-t border-rule pt-[1.4vh]"><div className="flex items-baseline justify-between"><div className="font-display text-[2vw]">NY Times</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-muted">Steve</div></div><div className="text-text/80 mt-[0.8vh] leading-snug">OpenAI capitalized on the situation, absorbing market share Anthropic left behind. The Pentagon used financial leverage to force private labs to abandon their safety rules.</div></div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted"><span>Pivot — Sources</span><span>07 · Sources Analysis</span></div>
    </div>
  );
}
