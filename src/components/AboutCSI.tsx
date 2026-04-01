const AboutCSI = () => (
  <section id="about" className="relative py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        About <span className="text-secondary glow-text-blue">Computer Society of India</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
        India's largest body of computer professionals, advancing IT knowledge and innovation.
      </p>

      {/* Single unified info card */}
      <div className="mx-auto max-w-4xl">
        <div className="glass rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:border-secondary/40 glow-blue">

          {/* CSI overview */}
          <div className="mb-8">
            <p className="text-base leading-relaxed text-justify text-muted-foreground sm:text-lg">
              The Computer Society of India (CSI) is the largest professional body of computer and IT professionals in India,
              dedicated to advancing the field of information technology through knowledge sharing, innovation, and skill
              development. Established in 1965, CSI plays a vital role in organizing conferences, workshops, and technical
              events across the country, while also supporting student chapters to nurture young talent and promote research
              and industry collaboration.
            </p>
          </div>

          {/* Neon divider */}
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

          {/* Kancheepuram Chapter */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              CSI Kancheepuram Chapter
            </div>
            <p className="text-base leading-relaxed text-justify text-muted-foreground sm:text-lg">
              The CSI Kancheepuram Chapter is a regional unit of CSI that focuses on fostering technical growth and innovation
              among students and professionals in and around Kancheepuram. It actively organizes workshops, seminars,
              hackathons, and industry-focused events to enhance practical skills and bridge the gap between academic learning
              and real-world applications. Through its initiatives and collaborations with educational institutions, the
              chapter aims to build a strong tech community and inspire young minds to explore emerging technologies and
              career opportunities in the IT sector.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
);

export default AboutCSI;

