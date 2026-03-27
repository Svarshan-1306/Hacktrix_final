import { AlertTriangle } from "lucide-react";

const plans = [
  { label: "CSI Members", price: "₹499", sub: "per team", highlight: true },
  { label: "Non-CSI Members", price: "₹599", sub: "per team", highlight: false },
];

const Registration = () => (
  <section id="registration" className="py-24 gradient-bg">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Registration <span className="text-primary glow-text-orange">Details</span>
      </h2>
      <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
        Secure your spot before it's too late.
      </p>

      <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
        {plans.map(({ label, price, sub, highlight }) => (
          <div
            key={label}
            className={`glass rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
              highlight ? "border-primary/40 glow-orange" : "hover:border-secondary/40"
            }`}
          >
            {highlight && (
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Best Value
              </span>
            )}
            <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground">{label}</h3>
            <div className="my-4 font-heading text-4xl font-black text-foreground">{price}</div>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-primary">
          <AlertTriangle size={16} />
          <span className="font-semibold">Limited Seats Available</span>
        </div>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-10 py-3.5 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-orange"
        >
          Register Now
        </a>
      </div>
    </div>
  </section>
);

export default Registration;
