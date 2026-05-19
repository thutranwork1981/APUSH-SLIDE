import techHumanImg from "@assets/technology-human-touch-background-modern-remake-creation-adam_1779171406772.jpg";

export default function Conclusion() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Conclusion — Output &amp; Controversy</span>
        <span>11 — 12</span>
      </div>

      <div className="absolute top-[16vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-[1.25fr_1fr] gap-[4vw]">
        {/* Left: text */}
        <div className="flex flex-col">
          <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">
            Closing Note — Effects
          </div>
          <h1 className="font-display text-[5vw] leading-[0.95] tracking-tight">A landscape</h1>
          <h1 className="font-display italic text-[5vw] leading-[0.95] tracking-tight">redrawn.</h1>

          <div className="mt-[4vh] border-t border-rule pt-[2vh]">
            <div className="text-[1.45vw] text-text/85 leading-relaxed">
              The Pentagon's push for unrestricted AI has reshaped the industry. By sidelining Anthropic and partnering with OpenAI, Nvidia, and Alphabet, the military cleared a path past vendor guardrails — opening doors to autonomous warfare and mass surveillance.
            </div>
          </div>

          <div className="mt-[3vh] grid grid-cols-2 gap-[2vw]">
            <div className="border-t border-rule pt-[1.6vh]">
              <div className="text-[1vw] tracking-[0.28em] uppercase text-accent">Government</div>
              <div className="text-[1.3vw] text-text/80 leading-snug mt-[0.6vh]">
                Restrictions hold America back; security calls cannot rest with private labs.
              </div>
            </div>
            <div className="border-t border-rule pt-[1.6vh]">
              <div className="text-[1vw] tracking-[0.28em] uppercase text-accent">Citizens</div>
              <div className="text-[1.3vw] text-text/80 leading-snug mt-[0.6vh]">
                Removing safeguards invites automated error, threatens privacy, and sets a chilling precedent.
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative border border-rule overflow-hidden bg-bg">
          <img
            src={techHumanImg}
            crossOrigin="anonymous"
            alt="Technology meets human touch"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[1.2vw] left-[1.2vw] right-[1.2vw] text-[1vw] tracking-[0.22em] uppercase text-white/90 bg-black/35 px-[0.8vw] py-[0.5vw]">
            Plate 11 · Where Hands Meet
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Conclusion</span>
        <span>11 · Output &amp; Controversy</span>
      </div>
    </div>
  );
}
