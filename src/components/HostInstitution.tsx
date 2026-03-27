const logos = [
  { name: "Sri Sai Ram Institute of Technology", text: "SSIT" },
  { name: "Computer Society of India", text: "CSI" },
  { name: "IEEE Computer Society", text: "IEEE CS" },
];

const LogoBanner = () => (
  <div className="relative mt-16 overflow-hidden py-8">
    <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
    <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
    <div className="group flex animate-marquee hover:[animation-play-state:paused]">
      {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
        <div
          key={i}
          className="mx-8 flex-shrink-0 glass rounded-xl px-10 py-5 font-heading text-sm font-bold tracking-widest text-muted-foreground"
        >
          {logo.text}
        </div>
      ))}
    </div>
  </div>
);

const HostInstitution = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Hosted By <span className="text-primary glow-text-orange">Sri Sai Ram Institute of Technology</span>
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
        Sri Sai Ram Institute of Technology, Chennai, is a premier engineering institution known for
        academic excellence and industry partnerships. The institute nurtures innovation through
        state-of-the-art labs, hackathons, and research initiatives.
      </p>
      <p className="text-center text-sm text-muted-foreground">
        📍 West Tambaram, Chennai, Tamil Nadu
      </p>
    </div>
    <LogoBanner />
  </section>
);

export default HostInstitution;
