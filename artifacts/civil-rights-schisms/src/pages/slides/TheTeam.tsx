import techHumanImg from "@assets/technology-human-touch-background-modern-remake-creation-adam_1779171406772.jpg";

const base = import.meta.env.BASE_URL;

export default function TheTeam() {
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
      {/* Cream wash to keep editorial feel */}
      <div className="absolute inset-0 bg-bg/55" />

      {/* Outline frame */}
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      {/* Top bar */}
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>The Team</span>
        <span>02 — 12</span>
      </div>

      {/* Main content */}
      <div className="absolute top-[18vh] left-[6vw] right-[6vw] flex items-start justify-between gap-[4vw]">
        <div className="w-[55%]">
          <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[3vh]">
            Chapter 01 — About
          </div>
          <h1 className="font-display text-[5.4vw] leading-[1] tracking-tight text-text">
            Anthropic &
          </h1>
          <h1 className="font-display text-[5.4vw] leading-[1] tracking-tight text-text">
            OpenAI,
          </h1>
          <h1 className="font-display italic text-[5.4vw] leading-[1] tracking-tight text-text">
            with the Pentagon.
          </h1>
          <p className="mt-[3vh] text-[1.5vw] leading-relaxed text-text/80 max-w-[40vw]">
            A small team, a contested year, and a question of who sets the limits of military artificial intelligence.
          </p>
        </div>

        {/* Small square with tech-human image */}
        <div className="w-[28vw] h-[28vw] relative border border-rule bg-bg/80 overflow-hidden">
          <img
            src={techHumanImg}
            crossOrigin="anonymous"
            alt="Technology meets human touch"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[1vw] left-[1vw] right-[1vw] text-[1vw] tracking-[0.22em] uppercase text-white/90 bg-black/30 px-[0.6vw] py-[0.4vw]">
            Plate 02 · Hand to Hand
          </div>
        </div>
      </div>

      {/* Team members row */}
      <div className="absolute bottom-[14vh] left-[6vw] right-[6vw]">
        <div className="text-[1.1vw] tracking-[0.28em] uppercase text-muted mb-[2vh]">
          Team Members
        </div>
        <div className="grid grid-cols-4 gap-[2vw] border-t border-rule pt-[2vh]">
          <div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">01</div>
            <div className="font-display text-[2.4vw] leading-tight mt-[0.6vh]">Tony</div>
            <div className="text-[1.3vw] text-text/70 mt-[0.6vh] leading-snug">Lead · Context · Design</div>
          </div>
          <div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">02</div>
            <div className="font-display text-[2.4vw] leading-tight mt-[0.6vh]">Adam</div>
            <div className="text-[1.3vw] text-text/70 mt-[0.6vh] leading-snug">Sources · Analysis · Graphic</div>
          </div>
          <div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">03</div>
            <div className="font-display text-[2.4vw] leading-tight mt-[0.6vh]">Derek</div>
            <div className="text-[1.3vw] text-text/70 mt-[0.6vh] leading-snug">Sources · Analysis · Presenter</div>
          </div>
          <div>
            <div className="text-[1vw] tracking-[0.22em] uppercase text-muted">04</div>
            <div className="font-display text-[2.4vw] leading-tight mt-[0.6vh]">Steve</div>
            <div className="text-[1.3vw] text-text/70 mt-[0.6vh] leading-snug">Ideas · Presenter</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>The Team</span>
        <span>02 · About</span>
      </div>
    </div>
  );
}
