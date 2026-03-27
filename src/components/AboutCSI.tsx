import { Globe, Users, Award } from "lucide-react";

const AboutCSI = () => (
  <section id="about" className="relative py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About <span className="text-secondary glow-text-blue">Computer Society of India</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        India's largest body of computer professionals, advancing IT knowledge and innovation.
      </p>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {[
          { icon: Globe, title: "Nationwide Reach", desc: "Over 500 chapters across India fostering technology growth and digital literacy." },
          { icon: Users, title: "100K+ Members", desc: "Students, academics, and industry professionals collaborating to advance computing." },
          { icon: Award, title: "Student Chapters", desc: "Supporting hackathons, conferences, and workshops to build the next generation of tech leaders." },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 glow-blue"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Icon size={28} />
            </div>
            <h3 className="mb-2 font-heading text-sm font-semibold tracking-wide text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutCSI;
