import { useState } from "react";

const day1 = [
  { time: "09:00 AM", title: "Inauguration & Briefing" },
  { time: "10:00 AM", title: "Hackathon Kickoff" },
  { time: "12:00 PM", title: "Idea Validation Round" },
  { time: "02:00 PM", title: "Mentoring Session" },
  { time: "06:00 PM", title: "Progress Evaluation" },
];

const day2 = [
  { time: "08:00 AM", title: "Final Development Phase" },
  { time: "12:00 PM", title: "Submission Deadline" },
  { time: "01:00 PM", title: "Final Judging" },
  { time: "03:00 PM", title: "Results Announcement" },
  { time: "04:00 PM", title: "Closing Ceremony" },
];

const TimelineItem = ({ time, title, index }: { time: string; title: string; index: number }) => (
  <div
    className="relative flex gap-8 pb-14 opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex flex-col items-center">
      <div className="h-6 w-6 rounded-full bg-primary shadow-[0_0_12px_rgba(255,90,0,0.7)] flex-shrink-0" />
      <div className="w-0.5 flex-1 bg-border" />
    </div>
    <div className="glass -mt-1 flex-1 rounded-2xl px-10 py-8 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,90,0,0.15)]">
      <span className="font-cyber text-xl font-semibold text-primary tracking-widest">{time}</span>
      <h4 className="mt-2 font-heading text-2xl font-semibold tracking-wide text-foreground">{title}</h4>
    </div>
  </div>
);

const ORANGE_GLOW = "drop-shadow(0 0 8px rgba(255,90,0,0.95)) drop-shadow(0 0 20px rgba(255,90,0,0.6))";
const BLUE_GLOW   = "drop-shadow(0 0 8px rgba(0,200,255,0.95)) drop-shadow(0 0 20px rgba(0,200,255,0.6))";

const NeonDecorations = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* ── RIGHT SIDE ─────────────────────────────────── */}

    {/* large outer ring */}
    <svg
      className="absolute -right-20 top-10 animate-[spin_30s_linear_infinite]"
      width="380" height="380" viewBox="0 0 380 380"
      style={{ filter: ORANGE_GLOW }}
    >
      <circle cx="190" cy="190" r="178" fill="none" stroke="hsl(24,100%,60%)" strokeWidth="2.5" strokeDasharray="14 12" />
    </svg>

    {/* medium counter-spin ring */}
    <svg
      className="absolute right-10 top-24 animate-[spin_18s_linear_infinite_reverse]"
      width="200" height="200" viewBox="0 0 200 200"
      style={{ filter: BLUE_GLOW }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(200,100%,65%)" strokeWidth="2" strokeDasharray="8 8" />
    </svg>

    {/* pulsing orange glow dot */}
    <div className="absolute right-32 top-48 h-6 w-6 rounded-full bg-primary animate-pulse"
      style={{ boxShadow: "0 0 0 4px rgba(255,90,0,0.3), 0 0 30px 12px rgba(255,90,0,0.7), 0 0 60px 20px rgba(255,90,0,0.3)" }}
    />

    {/* neon horizontal scan line burst */}
    <svg
      className="absolute right-0 top-1/2 -translate-y-1/2"
      width="220" height="50" viewBox="0 0 220 50"
      style={{ filter: BLUE_GLOW }}
    >
      <line x1="220" y1="25" x2="50" y2="25" stroke="hsl(200,100%,65%)" strokeWidth="2" />
      <line x1="220" y1="17" x2="100" y2="17" stroke="hsl(200,100%,65%)" strokeWidth="1" />
      <line x1="220" y1="33" x2="100" y2="33" stroke="hsl(200,100%,65%)" strokeWidth="1" />
      <circle cx="50" cy="25" r="5" fill="hsl(200,100%,65%)" />
    </svg>

    {/* ── LEFT SIDE ─────────────────────────────────── */}

    {/* large outer ring */}
    <svg
      className="absolute -left-16 bottom-16 animate-[spin_35s_linear_infinite_reverse]"
      width="300" height="300" viewBox="0 0 300 300"
      style={{ filter: BLUE_GLOW }}
    >
      <circle cx="150" cy="150" r="138" fill="none" stroke="hsl(200,100%,65%)" strokeWidth="2" strokeDasharray="10 10" />
    </svg>

    {/* pulsing blue glow dot */}
    <div className="absolute left-24 top-1/3 h-6 w-6 rounded-full bg-secondary animate-pulse"
      style={{ animationDelay: "0.7s", boxShadow: "0 0 0 4px rgba(0,200,255,0.3), 0 0 30px 12px rgba(0,200,255,0.7), 0 0 60px 20px rgba(0,200,255,0.3)" }}
    />

    {/* floating neon triangle */}
    <svg
      className="absolute left-12 top-44 animate-[float_10s_ease-in-out_infinite]"
      width="80" height="80" viewBox="0 0 80 80"
      style={{ filter: BLUE_GLOW }}
    >
      <polygon points="40,4 76,74 4,74" fill="none" stroke="hsl(200,100%,65%)" strokeWidth="2.5" />
    </svg>

    {/* left scan line */}
    <svg
      className="absolute left-0 top-2/5"
      width="180" height="50" viewBox="0 0 180 50"
      style={{ filter: ORANGE_GLOW }}
    >
      <line x1="0" y1="25" x2="150" y2="25" stroke="hsl(24,100%,60%)" strokeWidth="2" />
      <line x1="0" y1="17" x2="90"  y2="17" stroke="hsl(24,100%,60%)" strokeWidth="1" />
      <line x1="0" y1="33" x2="90"  y2="33" stroke="hsl(24,100%,60%)" strokeWidth="1" />
      <circle cx="150" cy="25" r="5" fill="hsl(24,100%,60%)" />
    </svg>



  </div>
);

const Agenda = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const events = activeDay === 1 ? day1 : day2;


  return (
    <section id="agenda" className="relative py-24 gradient-bg">  
      <NeonDecorations />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Event <span className="text-secondary glow-text-blue">Schedule</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-lg text-muted-foreground">
          Two days of building, learning, and competing.
        </p>

        {/* Tabs */}
        <div className="mx-auto mb-12 flex max-w-sm gap-3">
          {([1, 2] as const).map((d) => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`flex-1 rounded-xl py-4 font-heading text-lg font-semibold tracking-wider transition-all ${
                activeDay === d
                  ? "bg-primary text-primary-foreground glow-orange"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              Day {d}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl" key={activeDay}>
          {events.map((e, i) => (
            <TimelineItem key={e.title} time={e.time} title={e.title} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
