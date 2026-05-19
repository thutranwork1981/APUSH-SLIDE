import techHumanImg from "@assets/image_1779173156558.png";

export default function Conclusion() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Conclusion — Output &amp; Controversy</span>
        <span>11 — 12</span>
      </div>
      <div className="absolute top-[16vh] left-[6vw] right-[6vw] bottom-[14vh] grid grid-cols-[1.2fr_1fr] gap-[4vw]">
        <div className="flex flex-col">
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">Closing Note — Effects</div>
          <h1 className="font-display text-[4.8vw] leading-[0.96] tracking-tight">A landscape</h1>
          <h1 className="font-display italic text-[4.8vw] leading-[0.96] tracking-tight">redrawn.</h1>
          <div className="mt-[3vh] border-t border-rule pt-[1.8vh] text-[1.35vw] text-text/85 leading-relaxed max-w-[38vw]">The Pentagon's push for unrestricted AI has reshaped the industry. By sidelining Anthropic and partnering with OpenAI, Nvidia, and Alphabet, the military cleared a path past vendor guardrails — opening doors to autonomous warfare and mass surveillance.</div>
        </div>
        <div className="relative border border-rule overflow-hidden bg-bg">
          <img src={techHumanImg} crossOrigin="anonymous" alt="Hands meeting" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Conclusion</span>
        <span>11 · Output &amp; Controversy</span>
      </div>
    </div>
  );
}
