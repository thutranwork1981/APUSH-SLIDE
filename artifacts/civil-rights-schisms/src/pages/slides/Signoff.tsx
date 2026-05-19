export default function Signoff() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      {/* Spline 3D background */}
      <iframe
        src="https://my.spline.design/nexbotrobotcharacterconcept-RrFObcWen3aYB31xmQQTLhEO/"
        title="Spline 3D Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0 pointer-events-none"
      />

      {/* Watermark cover — Spline's badge sits bottom-right; cover it with bg-matched block */}
      <div className="absolute bottom-0 right-0 w-[19vw] h-[10vh] bg-bg z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[2vh] bg-bg z-10" />

      {/* Soft cream wash so text reads cleanly over the 3D scene */}
      <div className="absolute inset-0 bg-bg/55 z-[5]" />

      {/* Frame */}
      <div className="absolute inset-[3vh] border border-rule pointer-events-none z-20" />

      {/* Top bar */}
      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted z-20">
        <span>Epilogue — Team Duckiez</span>
        <span>12 — 12</span>
      </div>

      {/* Main content */}
      <div className="absolute top-[20vh] left-[6vw] right-[6vw] z-20">
        <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[2vh]">
          A Brief Signoff
        </div>
        <h1 className="font-display text-[9vw] leading-[0.95] tracking-tight text-text">Thank you.</h1>
        <p className="mt-[4vh] text-[1.8vw] italic font-display leading-relaxed text-text/85 max-w-[55vw]">
          From a quiet field to a fractured doctrine — this was the year the limits were re-drawn.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted z-20">
        <span>Epilogue</span>
        <span>Team Duckiez · The AI Schism, 2026</span>
      </div>
    </div>
  );
}
