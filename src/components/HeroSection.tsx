import { useEffect, useState } from "react";
import heroRobot from "@/assets/hero-robot.png";

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
  <div className="glass rounded-xl px-4 py-3 text-center min-w-[70px] glow-orange">
    <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
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
      <div className="container relative z-10 mx-auto grid gap-12 px-4 py-32 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            HACK<span className="text-primary glow-text-orange">TRIX</span>
          </h1>
          <p className="font-heading text-lg font-semibold tracking-wide text-secondary sm:text-xl glow-text-blue">
            A 24-Hour Hackathon
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Organized by{" "}
            <span className="text-foreground font-medium">Sri Sai Ram Institute of Technology</span>{" "}
            in association with{" "}
            <span className="text-foreground font-medium">Computer Society of India – Region 7</span>
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="glass rounded-lg px-4 py-2 font-heading text-xs font-bold tracking-wider text-primary">
              🏆 PRIZE POOL: ₹50,000
            </span>
            <span className="glass rounded-lg px-4 py-2 text-xs text-muted-foreground">
              📅 April 16 & 17, 2026
            </span>
            <span className="glass rounded-lg px-4 py-2 text-xs text-muted-foreground">
              📍 Steve Jobs Hall, Chennai
            </span>
          </div>

          {/* Countdown */}
          <div className="flex flex-wrap gap-3 pt-2">
            <CountdownUnit value={time.days} label="Days" />
            <CountdownUnit value={time.hours} label="Hours" />
            <CountdownUnit value={time.minutes} label="Mins" />
            <CountdownUnit value={time.seconds} label="Secs" />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#registration"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-orange"
            >
              Register Now
            </a>
            <a
              href="#agenda"
              className="rounded-lg border border-glass-border bg-glass px-8 py-3 font-semibold text-foreground transition-all hover:border-secondary hover:text-secondary"
            >
              View Agenda
            </a>
          </div>
        </div>

        {/* Right – illustration */}
        <div className="hidden items-center justify-center lg:flex">
          <img
            src={heroRobot}
            alt="Futuristic tech illustration"
            className="w-full max-w-md animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
