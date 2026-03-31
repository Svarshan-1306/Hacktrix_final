const logos = [
  { name: "Sri Sai Ram Institute of Technology", src: "/ssit-logo.png" },
  { name: "Computer Society of India", src: "/csi-logo.png" },
  { name: "IEEE Computer Society", src: "/ieee-logo.png" },
];

const LogoBanner = () => {
  // Duplicate logos enough times so the banner always looks full
  const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  return (
    <div className="relative mt-16 overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      {/* Two identical tracks stacked side-by-side via CSS; first scrolls in, second follows immediately */}
      <div className="flex w-max">
        {/* First set */}
        <div className="flex animate-marquee-track">
          {repeated.map((logo, i) => (
            <div key={`a-${i}`} className="mx-10 flex flex-shrink-0 items-center justify-center h-32">
              <img src={logo.src} alt={logo.name} className="h-full w-auto rounded-2xl object-contain bg-white p-3" />
            </div>
          ))}
        </div>
        {/* Duplicate set – starts exactly where the first ends */}
        <div className="flex animate-marquee-track" aria-hidden>
          {repeated.map((logo, i) => (
            <div key={`b-${i}`} className="mx-10 flex flex-shrink-0 items-center justify-center h-32">
              <img src={logo.src} alt={logo.name} className="h-full w-auto rounded-2xl object-contain bg-white p-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HostInstitution = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Hosted By <span className="text-primary glow-text-orange">Sri Sai Ram Institute of Technology</span>
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-muted-foreground">
        Sri Sai Ram Institute of Technology, Chennai, is a premier engineering institution known for
        academic excellence and industry partnerships. The institute nurtures innovation through
        state-of-the-art labs, hackathons, and research initiatives.
      </p>
      <p className="text-center text-base text-muted-foreground">
        📍 West Tambaram, Chennai, Tamil Nadu
      </p>
    </div>
    <LogoBanner />
  </section>
);

export default HostInstitution;
