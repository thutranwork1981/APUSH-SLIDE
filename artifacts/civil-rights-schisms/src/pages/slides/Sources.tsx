export default function Sources() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Pivot — The Data</span>
        <span>07 — 12</span>
      </div>

      <div className="absolute top-[14vh] left-[6vw] right-[6vw]">
        <div className="text-[1.2vw] tracking-[0.22em] uppercase text-muted">Sources Analysis</div>
        <h1 className="font-display italic text-[4.6vw] leading-[1] tracking-tight mt-[1vh]">
          Four desks, one fracture.
        </h1>
      </div>

      <div className="absolute top-[34vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-2 grid-rows-2 gap-x-[4vw] gap-y-[3vh]">
        {/* CNN — Tony */}
        <div className="border-t border-rule pt-[1.6vh]">
          <div className="flex items-baseline justify-between">
            <div className="font-display text-[2.2vw] leading-none">CNN</div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">Tony</div>
          </div>
          <div className="text-[1.35vw] text-text/80 mt-[1vh] leading-snug">
            The Trump administration blacklisted Anthropic as a "supply chain risk" after it refused to drop Claude's safety guardrails for military use. Anthropic sued and won a temporary pause.
          </div>
        </div>

        {/* NPR — Derek */}
        <div className="border-t border-rule pt-[1.6vh]">
          <div className="flex items-baseline justify-between">
            <div className="font-display text-[2.2vw] leading-none">NPR</div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">Derek</div>
          </div>
          <div className="text-[1.35vw] text-text/80 mt-[1vh] leading-snug">
            Sec. Hegseth gave Anthropic a $200M ultimatum: strip the safety guardrails or face a total ban. Anthropic's CEO refused, warning the AI isn't ready for autonomous weaponry.
          </div>
        </div>

        {/* Forbes — Adam */}
        <div className="border-t border-rule pt-[1.6vh]">
          <div className="flex items-baseline justify-between">
            <div className="font-display text-[2.2vw] leading-none">Forbes</div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">Adam</div>
          </div>
          <div className="text-[1.35vw] text-text/80 mt-[1vh] leading-snug">
            A rift formed in Silicon Valley as OpenAI, Nvidia, Alphabet, SpaceX, and Amazon quickly signed classified Pentagon contracts while federal courts denied Anthropic's bid to block the ban.
          </div>
        </div>

        {/* NYT — Steve */}
        <div className="border-t border-rule pt-[1.6vh]">
          <div className="flex items-baseline justify-between">
            <div className="font-display text-[2.2vw] leading-none">NY Times</div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">Steve</div>
          </div>
          <div className="text-[1.35vw] text-text/80 mt-[1vh] leading-snug">
            OpenAI capitalized on the situation, absorbing market share Anthropic left behind. The Pentagon used massive financial leverage to force private labs to abandon their ethical safety rules.
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Pivot — Sources</span>
        <span>07 · Sources Analysis</span>
      </div>
    </div>
  );
}
