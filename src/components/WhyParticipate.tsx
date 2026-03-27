import { Code, Trophy, Users, Wrench, FolderOpen, Handshake } from "lucide-react";

const reasons = [
  { icon: Code, title: "Build Real-World Solutions", desc: "Solve real problems in just 24 hours with cutting-edge tech." },
  { icon: Trophy, title: "Win ₹50,000 in Prizes", desc: "Compete for exciting cash prizes and recognition." },
  { icon: Users, title: "Network with Mentors", desc: "Get guidance from industry experts and seasoned developers." },
  { icon: Wrench, title: "Hands-On Experience", desc: "Learn by building – the best way to sharpen your skills." },
  { icon: FolderOpen, title: "Enhance Your Portfolio", desc: "Ship a project in a weekend and stand out to recruiters." },
  { icon: Handshake, title: "Collaborate & Connect", desc: "Team up with like-minded developers and innovators." },
];

const WhyParticipate = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Why Be a Part of <span className="text-primary glow-text-orange">HACKTRIX</span>?
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
        More than a hackathon — it's a launchpad for your ideas.
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:glow-orange"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <Icon size={24} />
            </div>
            <h3 className="mb-2 font-heading text-sm font-semibold tracking-wide text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyParticipate;
