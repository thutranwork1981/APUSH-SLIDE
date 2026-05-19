import techHumanImg from "@assets/1_1779173090132.png";

const base = import.meta.env.BASE_URL;

export default function TheTeam() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <video
        src={`${base}kling.mp4`}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16]"
        onEnded={(e) => e.currentTarget.pause()}
      />
      <div className="absolute inset-0 bg-bg/68" />
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.2vw] tracking-[0.22em] uppercase text-muted">
        <span>The Team</span>
        <span>02 — 12</span>
      </div>
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] flex items-start justify-between gap-[4vw]">
        <div className="w-[54%]">
          <div className="text-[1.1vw] tracking-[0.22em] uppercase text-muted mb-[2.5vh]">Chapter 01 — About</div>
          <h1 className="font-display text-[5vw] leading-[0.96] tracking-tight">Anthropic & OpenAI,</h1>
          <h1 className="font-display italic text-[5vw] leading-[0.96] tracking-tight">with the Pentagon.</h1>
          <p className="mt-[2.8vh] text-[1.45vw] leading-relaxed text-text/80 max-w-[38vw]">
            A small team, a contested year, and a question of who sets the limits of military artificial intelligence.
          </p>
        </div>
        <div className="w-[24vw] h-[24vw] relative border border-rule overflow-hidden bg-bg">
          <img src={techHumanImg} crossOrigin="anonymous" alt="Technology and human touch" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] grid grid-cols-4 gap-[2vw] border-t border-rule pt-[2vh] text-[1.25vw]">
        <div><div className="font-display text-[2.2vw]">Tony</div><div className="text-text/70 mt-[0.4vh]">Lead · Context · Design</div></div>
        <div><div className="font-display text-[2.2vw]">Adam</div><div className="text-text/70 mt-[0.4vh]">Sources · Analysis · Graphic</div></div>
        <div><div className="font-display text-[2.2vw]">Derek</div><div className="text-text/70 mt-[0.4vh]">Sources · Analysis · Presenter</div></div>
        <div><div className="font-display text-[2.2vw]">Steve</div><div className="text-text/70 mt-[0.4vh]">Ideas · Presenter</div></div>
      </div>
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.1vw] tracking-[0.22em] uppercase text-muted">
        <span>The Team</span>
        <span>02 · About</span>
      </div>
    </div>
  );
}
