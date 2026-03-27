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
    className="relative flex gap-4 pb-8 opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-primary" />
      <div className="w-0.5 flex-1 bg-border" />
    </div>
    <div className="glass -mt-1 flex-1 rounded-xl px-5 py-4 transition-all hover:border-primary/30">
      <span className="text-xs font-medium text-primary">{time}</span>
      <h4 className="mt-1 font-heading text-sm font-semibold tracking-wide text-foreground">{title}</h4>
    </div>
  </div>
);

const Agenda = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const events = activeDay === 1 ? day1 : day2;

  return (
    <section id="agenda" className="py-24 gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Event <span className="text-secondary glow-text-blue">Schedule</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-muted-foreground">
          Two days of building, learning, and competing.
        </p>

        {/* Tabs */}
        <div className="mx-auto mb-10 flex max-w-xs gap-2">
          {([1, 2] as const).map((d) => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`flex-1 rounded-lg py-2.5 font-heading text-xs font-semibold tracking-wider transition-all ${
                activeDay === d
                  ? "bg-primary text-primary-foreground glow-orange"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              Day {d}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-lg" key={activeDay}>
          {events.map((e, i) => (
            <TimelineItem key={e.title} time={e.time} title={e.title} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
