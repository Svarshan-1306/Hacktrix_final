import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-16T09:00:00+05:30").getTime();

const calcTimeLeft = () => {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="relative flex min-w-[100px] flex-col items-center justify-center rounded-2xl border border-primary/20 bg-background/50 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,90,0,0.3)] sm:min-w-[120px]">
    <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-primary/40" />
    <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-primary/40" />
    <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-primary/40" />
    <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-primary/40" />
    
    <div className="font-cyber text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(255,90,0,0.6)] sm:text-6xl">
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
      {label}
    </div>
  </div>
);

const Particles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1 + "px",
          height: Math.random() * 3 + 1 + "px",
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          background: i % 3 === 0 ? "hsl(24 100% 50% / 0.4)" : "hsl(210 100% 55% / 0.3)",
          animation: `particle-float ${8 + Math.random() * 12}s linear ${Math.random() * 10}s infinite`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const [time, setTime] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center gradient-hero overflow-hidden">
      <Particles />
      <div className="container relative z-10 mx-auto flex flex-col items-center text-center px-4 py-32 lg:px-8">
        
        <h1 className="relative font-cyber text-7xl font-bold leading-none tracking-wider text-foreground sm:text-8xl lg:text-9xl">
          <span className="absolute -left-8 top-4 hidden -rotate-90 text-sm font-light tracking-widest text-muted-foreground/40 md:block">
            
          </span>
          [HACK<span className="text-primary glow-text-orange">TRIX</span>]
        </h1>
        <p className="mt-6 font-cyber text-2xl font-semibold uppercase tracking-widest text-secondary sm:text-3xl glow-text-blue">
          // A 24-Hour Hackathon
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Organized by{" "}
          <span className="text-foreground font-medium">Department of Computer Science and Engineering, Sri Sai Ram Institute of Technology</span>{" "}
          in association with{" "}
          <span className="text-foreground font-medium whitespace-nowrap">Computer Society of India – Region 7</span>
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 font-cyber uppercase tracking-wider">

  {/* Top Row */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
    <span className="flex items-center gap-2 rounded-xl border-2 border-secondary/50 bg-secondary/10 px-6 py-3 text-lg font-bold text-secondary shadow-[0_0_15px_rgba(0,255,255,0.2)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
      <span className="text-primary glow-text-orange">&gt;</span> PRIZE POOL: ₹50,000
    </span>

    <span className="flex items-center gap-2 rounded-xl border-2 border-muted-foreground/30 bg-muted/10 px-6 py-3 text-lg font-bold text-foreground shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
      <span className="text-primary glow-text-orange">&gt;</span> DATE: APRIL 16 &amp; 17, 2026
    </span>
  </div>

  {/* Bottom Row */}
  <div className="flex justify-center">
    <span className="flex items-center gap-2 rounded-xl border-2 border-primary/50 bg-primary/10 px-6 py-3 text-lg font-bold text-primary shadow-[0_0_15px_rgba(255,90,0,0.3)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,90,0,0.5)]">
      <span className="text-secondary glow-text-blue">&gt;</span> LOC: STEVE JOBS HALL , SRI SAI RAM INSTITUTE OF TECHNOLOGY.
    </span>
  </div>

</div>

        {/* Countdown */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          <CountdownUnit value={time.days} label="Days" />
          <CountdownUnit value={time.hours} label="Hours" />
          <CountdownUnit value={time.minutes} label="Mins" />
          <CountdownUnit value={time.seconds} label="Secs" />
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#registration"
            className="rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-orange"
          >
            Register Now
          </a>
          <a
            href="#agenda"
            className="rounded-lg border border-glass-border bg-glass px-10 py-4 text-lg font-semibold text-foreground transition-all hover:border-secondary hover:text-secondary"
          >
            View Agenda
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
