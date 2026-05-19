export default function HardLimits() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Refusal — The Hard Limits</span>
        <span>04 — 12</span>
      </div>

      <div className="absolute top-[18vh] left-[6vw] right-[6vw] grid grid-cols-[1.4fr_1fr] gap-[5vw]">
        {/* Left column: title + limits */}
        <div>
          <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[3vh]">
            Anthropic — Public Usage Policy
          </div>
          <h1 className="font-display text-[6vw] leading-[0.95] tracking-tight">The Hard</h1>
          <h1 className="font-display italic text-[6vw] leading-[0.95] tracking-tight mb-[4vh]">Limits.</h1>

          <div className="border-t border-rule pt-[2vh] mb-[2vh]">
            <div className="flex gap-[1.5vw]">
              <div className="font-display text-[2vw] text-accent w-[3vw]">I.</div>
              <div>
                <div className="text-[1.6vw] font-medium leading-tight">No Autonomous Weapons</div>
                <div className="text-[1.4vw] text-text/75 mt-[0.6vh] leading-snug max-w-[34vw]">
                  Claude cannot be deployed for fully autonomous lethal decisions. Human-in-the-loop, always.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-rule py-[2vh]">
            <div className="flex gap-[1.5vw]">
              <div className="font-display text-[2vw] text-accent w-[3vw]">II.</div>
              <div>
                <div className="text-[1.6vw] font-medium leading-tight">No Mass Surveillance</div>
                <div className="text-[1.4vw] text-text/75 mt-[0.6vh] leading-snug max-w-[34vw]">
                  Claude will not be turned on the population. No untargeted, large-scale surveillance — foreign or domestic.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[3vh] border-l-[3px] border-accent pl-[1.5vw]">
            <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">CBS News, Exclusive</div>
            <div className="font-display italic text-[2vw] leading-snug mt-[0.6vh] max-w-[36vw]">
              "We cannot, in good conscience, comply." — D. Amodei
            </div>
          </div>
        </div>

        {/* Right column: references */}
        <div>
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">References</div>
          <div className="font-display text-[2.4vw] leading-tight mb-[3vh]">Sources.</div>

          <div className="border-t border-rule py-[1.6vh]">
            <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">01 · CNN</div>
            <div className="text-[1.4vw] text-text/80 mt-[0.4vh] leading-snug">Pentagon AI / Anthropic, 2026</div>
          </div>
          <div className="border-t border-rule py-[1.6vh]">
            <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">02 · NPR</div>
            <div className="text-[1.4vw] text-text/80 mt-[0.4vh] leading-snug">Trump, Anthropic, Pentagon, OpenAI — AI Weapons Ban</div>
          </div>
          <div className="border-t border-rule py-[1.6vh]">
            <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">03 · Forbes</div>
            <div className="text-[1.4vw] text-text/80 mt-[0.4vh] leading-snug">OpenAI, Nvidia, Alphabet Sign Pentagon AI Deal</div>
          </div>
          <div className="border-t border-b border-rule py-[1.6vh]">
            <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted">04 · NY Times</div>
            <div className="text-[1.4vw] text-text/80 mt-[0.4vh] leading-snug">Pentagon AI Companies Deals, May 2026</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Refusal</span>
        <span>04 · The Hard Limits</span>
      </div>
    </div>
  );
}
