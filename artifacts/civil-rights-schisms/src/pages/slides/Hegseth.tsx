export default function Hegseth() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <div className="absolute inset-[3vh] border border-rule pointer-events-none" />

      <div className="absolute top-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.5vw] tracking-[0.18em] uppercase text-muted">
        <span>Doctrine — Sec. of Defense</span>
        <span>09 — 12</span>
      </div>

      <div className="absolute top-[15vh] left-[6vw] right-[6vw]">
        <div className="text-[1.3vw] tracking-[0.22em] uppercase text-muted mb-[1.5vh]">
          Chapter 05 — Doctrine
        </div>
        <h1 className="font-display text-[5.8vw] leading-[0.95] tracking-tight">The Hegseth</h1>
        <h1 className="font-display italic text-[5.8vw] leading-[0.95] tracking-tight">Doctrine.</h1>
      </div>

      <div className="absolute top-[44vh] left-[6vw] right-[6vw] border-l-[3px] border-accent pl-[1.5vw]">
        <div className="font-display italic text-[2.4vw] leading-snug max-w-[60vw]">
          "Private companies should not set policy for military operations."
        </div>
        <div className="text-[1.2vw] tracking-[0.22em] uppercase text-muted mt-[1vh]">
          — Pete Hegseth, Sec. of Defense
        </div>
      </div>

      <div className="absolute bottom-[14vh] left-[6vw] right-[6vw] grid grid-cols-3 gap-[3vw]">
        <div className="border-t border-rule pt-[2vh]">
          <div className="font-display text-[2vw] text-accent">I.</div>
          <div className="text-[1.6vw] font-medium leading-tight mt-[0.6vh]">Sovereignty</div>
          <div className="text-[1.3vw] text-text/75 mt-[1vh] leading-snug">
            Lethal-use boundaries set by elected government, not vendor terms of service.
          </div>
        </div>
        <div className="border-t border-rule pt-[2vh]">
          <div className="font-display text-[2vw] text-accent">II.</div>
          <div className="text-[1.6vw] font-medium leading-tight mt-[0.6vh]">All Lawful Use</div>
          <div className="text-[1.3vw] text-text/75 mt-[1vh] leading-snug">
            If legal under U.S. military authority, no model guardrail blocks it.
          </div>
        </div>
        <div className="border-t border-rule pt-[2vh]">
          <div className="font-display text-[2vw] text-accent">III.</div>
          <div className="text-[1.6vw] font-medium leading-tight mt-[0.6vh]">Vendor Substitution</div>
          <div className="text-[1.3vw] text-text/75 mt-[1vh] leading-snug">
            Refusing labs are replaced. Strategic AI is fungible.
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] flex justify-between items-center text-[1.3vw] tracking-[0.22em] uppercase text-muted">
        <span>Doctrine</span>
        <span>09 · The Hegseth Doctrine</span>
      </div>
    </div>
  );
}
