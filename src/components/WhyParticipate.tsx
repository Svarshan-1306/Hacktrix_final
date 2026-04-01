import { Code, Trophy, Users, Wrench, FolderOpen, Handshake, FileText } from "lucide-react";

const reasons = [
  { icon: Code, title: "Build Real-World Solutions", desc: "Solve real problems in just 24 hours with cutting-edge tech." },
  { icon: Trophy, title: "Win ₹25,000 in Prizes", desc: "Compete for exciting cash prizes and recognition." },
  { icon: Users, title: "Network with Mentors", desc: "Get guidance from industry experts and seasoned developers." },
  { icon: Wrench, title: "Hands-On Experience", desc: "Learn by building – the best way to sharpen your skills." },
  { icon: FolderOpen, title: "Enhance Your Portfolio", desc: "Ship a project in a weekend and stand out to recruiters." },
  { icon: Handshake, title: "Collaborate & Connect", desc: "Team up with like-minded developers and innovators." },
];

const WhyParticipate = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Why Be a Part of <span className="text-primary glow-text-orange">HACKTRIX</span>?
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-lg text-muted-foreground">
        More than a hackathon — it's a launchpad for your ideas.
      </p>

      <div className="mx-auto mb-14 text-center">
        <p className="mb-4 text-lg font-medium text-foreground sm:text-xl">
          These are the problem statements, take a look at it!
        </p>
        <a
          href="/problem-statements.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-6 py-3 font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(255,90,0,0.3)]"
        >
          <FileText size={20} />
          Click to Open PDF
        </a>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass group rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:glow-orange"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <Icon size={36} />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold tracking-wide text-foreground">{title}</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyParticipate;
