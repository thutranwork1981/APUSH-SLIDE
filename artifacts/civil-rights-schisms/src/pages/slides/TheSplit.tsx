export default function TheSplit() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Divergence — The Two Tracks</span>
        <span>08 — 12</span>
      </div>

      <div className="absolute top-[14vh] left-[6vw] right-[6vw]">
        <div className="text-[1.2vw] tracking-[0.22em] uppercase text-muted">Track A vs Track B</div>
        <h1 className="font-display italic text-[4.6vw] leading-[1] tracking-tight mt-[1vh]">
          One contract. Two postures.
        </h1>
      </div>

      <div className="absolute top-[34vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-2 gap-[5vw]">
        {/* Anthropic */}
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Track A</div>
          <div className="font-display text-[5vw] leading-none mt-[1vh]">Anthropic.</div>
          <div className="mt-[3vh] text-[1.5vw] text-text/85 leading-relaxed">
            Holds the line on autonomous weapons and mass surveillance. Sues the administration in N.D. Cal — wins preliminary injunction. Trades the $200M federal pipeline for its safety policy.
          </div>
          <div className="mt-auto pt-[3vh]">
            <div className="text-[1vw] tracking-[0.28em] uppercase text-muted">Posture</div>
            <div className="font-display italic text-[3vw] leading-none mt-[0.6vh]">Constraint</div>
          </div>
        </div>

        {/* OpenAI */}
        <div className="border-t border-rule pt-[2vh] flex flex-col">
          <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted">Track B</div>
          <div className="font-display text-[5vw] leading-none mt-[1vh]">OpenAI.</div>
          <div className="mt-[3vh] text-[1.5vw] text-text/85 leading-relaxed">
            Accepts the "all lawful use" clause for classified workflows. Joined by Nvidia (compute) and Alphabet (Gemini). Inherits the federal pipeline Anthropic vacated.
          </div>
          <div className="mt-auto pt-[3vh]">
            <div className="text-[1vw] tracking-[0.28em] uppercase text-muted">Posture</div>
            <div className="font-display italic text-[3vw] leading-none mt-[0.6vh]">Compliance</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Divergence — Anthropic vs. OpenAI</span>
        <span>08 · The Split</span>
      </div>
    </div>
  );
}
