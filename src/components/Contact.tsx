import { Phone, Mail } from "lucide-react";

const contacts = [
  { name: "Ajitha Ananthi J", phone: "+91 98765 43210", email: "ajitha@sairam.edu.in" },
  { name: "Tanushri R M", phone: "+91 98765 43211", email: "tanushri@sairam.edu.in" },
];

const Contact = () => (
  <section id="contact" className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Contact <span className="text-secondary glow-text-blue">Us</span>
      </h2>
      <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
        Have questions? Reach out to our coordinators.
      </p>

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {contacts.map((c) => (
          <div key={c.name} className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-secondary/40">
            <h3 className="mb-3 font-heading text-sm font-semibold tracking-wide text-foreground">{c.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" /> {c.phone}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-secondary" /> {c.email}
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-glass-border">
        <iframe
          title="Sri Sai Ram Institute of Technology"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5399680704!2d80.04193427586614!3d12.936523315437048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5124ab7485f%3A0x6da39a1b22853bf7!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
