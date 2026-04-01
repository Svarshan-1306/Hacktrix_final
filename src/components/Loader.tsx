import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const DURATION = 2600; // ms total loading duration

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // Animate progress 0 → 100 over DURATION ms
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(100, Math.floor((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Trigger exit after a tiny hold at 100%
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900); // wait for fade-out animation
        }, 300);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  // Lock body scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="loader-root"
      style={{ opacity: exiting ? 0 : 1, filter: exiting ? "blur(12px)" : "blur(0px)", transform: exiting ? "scale(0.96)" : "scale(1)" }}
      aria-hidden="true"
    >
      {/* ── Animated grid background ── */}
      <div className="loader-grid" />

      {/* ── Ambient glow blobs ── */}
      <div className="loader-blob loader-blob-orange" />
      <div className="loader-blob loader-blob-blue" />

      {/* ── Floating particles ── */}
      <div className="loader-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="loader-particle" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      {/* ── Centerpiece ── */}
      <div className="loader-center">
        {/* Outer spinning ring */}
        <div className="loader-ring loader-ring-outer" />
        {/* Middle pulsing ring */}
        <div className="loader-ring loader-ring-mid" />
        {/* Inner glowing hexagon */}
        <div className="loader-hex-wrap">
          <svg className="loader-hex-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="60,4 112,32 112,88 60,116 8,88 8,32"
              stroke="url(#hexGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#hexGlow)"
            />
            <defs>
              <linearGradient id="hexGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF6A00" />
                <stop offset="100%" stopColor="#00C2FF" />
              </linearGradient>
              <filter id="hexGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Inner content */}
          <div className="loader-inner-content">
            <span className="loader-label">Loading</span>
          </div>
        </div>

        {/* Progress arc */}
        <svg className="loader-progress-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="arcGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="50%" stopColor="#FFB800" />
              <stop offset="100%" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle cx="100" cy="100" r="90" stroke="#ffffff08" strokeWidth="2" />
          {/* Progress */}
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#arcGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 90}`}
            strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
            transform="rotate(-90 100 100)"
            filter="url(#arcGlowFilter)"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
          <defs>
            <filter id="arcGlowFilter">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Percentage counter */}
        <div className="loader-pct">{progress}%</div>
      </div>

      {/* ── Brand tag ── */}
      <div className="loader-brand">
        <span className="loader-brand-text">[HACK<span className="loader-brand-accent">TRIX</span>]</span>
        <span className="loader-brand-sub">Initializing System…</span>
      </div>
    </div>
  );
};

export default Loader;
