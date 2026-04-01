const Contact = () => (
  <section id="contact" className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Reach <span className="text-secondary glow-text-blue">Us</span>
      </h2>
      <p className="mx-auto mb-12 max-w-lg text-center text-lg text-muted-foreground">
        We're here to help you with any questions or concerns you may have.
      </p>

      {/* Map */}
      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-glass-border">
        <iframe
          title="Sri Sai Ram Institute of Technology"
          src="https://maps.google.com/maps?q=Sri+Sai+Ram+Institute+of+Technology,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default Contact;
