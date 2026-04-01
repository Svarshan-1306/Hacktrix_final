import { AlertTriangle, UserCheck, User } from "lucide-react";

const ORANGE_GLOW = "drop-shadow(0 0 8px rgba(255,90,0,0.95)) drop-shadow(0 0 20px rgba(255,90,0,0.6))";
const BLUE_GLOW = "drop-shadow(0 0 8px rgba(0,200,255,0.95)) drop-shadow(0 0 20px rgba(0,200,255,0.6))";

const plans = [
  {
    label: "CSI Members",
    price: "₹499",
    sub: "per student",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    border: "border-primary/50",
    glow: "hover:shadow-[0_0_30px_rgba(255,90,0,0.3)] border-primary/20 hover:border-primary/60",
    icon: UserCheck
  },
  {
    label: "Non-CSI Members",
    price: "₹599",
    sub: "per student",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    border: "border-secondary/50",
    glow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] border-secondary/20 hover:border-secondary/60",
    icon: User
  },
];

const Registration = () => (
  <section id="registration" className="relative py-24 gradient-bg overflow-hidden">

    {/* ── Abstract shape decorations ── */}
    <div className="pointer-events-none absolute inset-0">

      {/* spinning tech crosshair — left */}
      <svg
        className="absolute left-16 top-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite]"
        width="110" height="110" viewBox="0 0 110 110"
        style={{ filter: ORANGE_GLOW }}
      >
        <circle cx="55" cy="55" r="42" fill="none" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="55" y1="0" x2="55" y2="30" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="55" y1="80" x2="55" y2="110" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="0" y1="55" x2="30" y2="55" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="80" y1="55" x2="110" y2="55" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <circle cx="55" cy="55" r="6" fill="hsl(24,100%,60%)" />
      </svg>

      {/* small counter-spin crosshair — bottom-left */}
      <svg
        className="absolute left-40 bottom-10 animate-[spin_22s_linear_infinite_reverse]"
        width="70" height="70" viewBox="0 0 70 70"
        style={{ filter: ORANGE_GLOW }}
      >
        <circle cx="35" cy="35" r="26" fill="none" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="35" y1="0" x2="35" y2="18" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="35" y1="52" x2="35" y2="70" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="0" y1="35" x2="18" y2="35" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <line x1="52" y1="35" x2="70" y2="35" stroke="hsl(24,100%,60%)" strokeWidth="2" />
        <circle cx="35" cy="35" r="4" fill="hsl(24,100%,60%)" />
      </svg>

      {/* floating diamond — right */}
      <svg
        className="absolute right-16 top-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"
        width="90" height="90" viewBox="0 0 90 90"
        style={{ filter: ORANGE_GLOW }}
      >
        <polygon points="45,3 87,45 45,87 3,45" fill="none" stroke="hsl(24,100%,60%)" strokeWidth="2.5" />
      </svg>

      {/* blue glow dot — right, offset from diamond */}
      <div
        className="absolute right-24 bottom-16 h-5 w-5 rounded-full bg-secondary animate-pulse"
        style={{ animationDelay: "1.2s", boxShadow: "0 0 0 4px rgba(0,200,255,0.3), 0 0 30px 12px rgba(0,200,255,0.7), 0 0 60px 20px rgba(0,200,255,0.3)" }}
      />
    </div>


    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-4 text-center font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Registration <span className="text-primary glow-text-orange">Details</span>
      </h2>
      <p className="mx-auto mb-12 max-w-lg text-center text-lg text-muted-foreground">
        Secure your spot before it's too late.
      </p>

      <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2">
        {plans.map(({ label, price, sub, gradient, glow, icon: Icon }) => (
          <div
            key={label}
            className={`group relative overflow-hidden rounded-3xl border-2 bg-background/40 p-10 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${glow}`}
          >
            {/* Fancy ambient gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />

            {/* Content box */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md shadow-inner border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                <Icon className="h-8 w-8 text-foreground/80 group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h3 className="mb-2 font-heading text-2xl font-bold tracking-wide text-foreground">{label}</h3>
              <div className="my-6">
                <span className="font-heading text-6xl font-black text-foreground tracking-tight drop-shadow-md">{price}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-pulse" />
                {sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-base text-primary">
          <AlertTriangle size={16} />
          <span className="font-semibold">Limited Seats Available</span>
        </div>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-orange"
        >
          Register Now
        </a>
      </div>
    </div>
  </section>
);

export default Registration;
