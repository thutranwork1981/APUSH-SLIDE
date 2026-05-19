export default function Coalition() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>Pivot — The Signatories</span>
        <span>06 — 12</span>
      </div>
      <div className="absolute top-[16vh] left-[6vw] right-[6vw]">
        <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[1.5vh]">Pentagon Briefing — 01 May 2026</div>
        <h1 className="font-display text-[5.2vw] leading-[1] tracking-tight">The Defense</h1>
        <h1 className="font-display italic text-[5.2vw] leading-[1] tracking-tight">Coalition.</h1>
      </div>
      <div className="absolute bottom-[14vh] left-[6vw] right-[6vw] grid grid-cols-3 gap-[3vw] text-[1.25vw]">
        <div className="border-t border-rule pt-[2vh]"><div className="font-display text-[2.6vw]">OpenAI</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-accent mt-[0.8vh]">Restrictions Lifted</div><div className="text-text/80 mt-[1vh] leading-snug">Frontier model access cleared for classified defense workflows under "all lawful use."</div></div>
        <div className="border-t border-rule pt-[2vh]"><div className="font-display text-[2.6vw]">Nvidia</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-accent mt-[0.8vh]">Compute Cleared</div><div className="text-text/80 mt-[1vh] leading-snug">Compute substrate. Classified-tier GPUs and inference infrastructure for the new model stack.</div></div>
        <div className="border-t border-rule pt-[2vh]"><div className="font-display text-[2.6vw]">Alphabet</div><div className="text-[0.95vw] tracking-[0.22em] uppercase text-accent mt-[0.8vh]">Pledge Retired</div><div className="text-text/80 mt-[1vh] leading-snug">Gemini cleared for classified deployments. Quiet retirement of the 2018 Project Maven pledge.</div></div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>Pivot — OpenAI, Nvidia, Alphabet</span>
        <span>06 · The Coalition</span>
      </div>
    </div>
  );
}
