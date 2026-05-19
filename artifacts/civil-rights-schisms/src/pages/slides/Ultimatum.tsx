const base = import.meta.env.BASE_URL;

export default function Ultimatum() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      {/* Background kling video, no loop, stops on last frame */}
      <video
        src={`${base}kling.mp4`}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        onEnded={(e) => e.currentTarget.pause()}
      />
      <div className="absolute inset-0 bg-bg/60" />

      {/* Outline frame */}
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Origin — The Offer</span>
        <span>03 — 12</span>
      </div>

      {/* Main content split */}
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] grid grid-cols-2 gap-[5vw]">
        {/* Left column */}
        <div>
          <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[3vh]">
            Chapter 02 — Jul 2025 / Feb 2026
          </div>
          <div className="font-display text-[4.6vw] leading-[0.95] tracking-tight">The</div>
          <div className="font-display text-[8vw] leading-[0.9] tracking-tighter text-text">$200M</div>
          <div className="font-display italic text-[4.6vw] leading-[1] tracking-tight">Ultimatum.</div>
          <p className="mt-[3vh] text-[1.5vw] leading-relaxed text-text/80 max-w-[34vw]">
            A federal frontier-AI contract, repurposed as a coercion lever. Comply with the lift on safety guardrails or be revoked — the first overt test of whether vendor ethics or government authority defines the boundaries of military AI.
          </p>
        </div>

        {/* Right column: principals */}
        <div>
          <div className="text-[1.2vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">
            Timeline — Feb / May 2026
          </div>
          <div className="font-display text-[2.6vw] leading-tight mb-[3vh]">The principals.</div>

          <div className="border-t border-rule pt-[2vh] mb-[2.5vh]">
            <div className="flex gap-[1.5vw]">
              <div className="font-display text-[2vw] text-accent w-[3vw]">I.</div>
              <div>
                <div className="text-[1.4vw] tracking-[0.2em] uppercase text-text font-medium">Demand</div>
                <div className="text-[1.4vw] text-text/75 leading-snug mt-[0.6vh] max-w-[28vw]">
                  Lift Anthropic's hard limits on autonomous lethality and mass surveillance.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-rule pt-[2vh] mb-[2.5vh]">
            <div className="flex gap-[1.5vw]">
              <div className="font-display text-[2vw] text-accent w-[3vw]">II.</div>
              <div>
                <div className="text-[1.4vw] tracking-[0.2em] uppercase text-text font-medium">Leverage</div>
                <div className="text-[1.4vw] text-text/75 leading-snug mt-[0.6vh] max-w-[28vw]">
                  $200M federal pipeline conditioned on full compliance.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-rule py-[2vh]">
            <div className="flex gap-[1.5vw]">
              <div className="font-display text-[2vw] text-accent w-[3vw]">III.</div>
              <div>
                <div className="text-[1.4vw] tracking-[0.2em] uppercase text-text font-medium">Reprisal</div>
                <div className="text-[1.4vw] text-text/75 leading-snug mt-[0.6vh] max-w-[28vw]">
                  Refusal triggers blacklist designation and contract revocation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Origin</span>
        <span>03 · The Ultimatum</span>
      </div>
    </div>
  );
}
