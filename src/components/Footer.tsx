import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between lg:px-8">
      <span className="font-heading text-lg font-bold tracking-wider text-primary">HACKTRIX</span>
      <div className="flex gap-4">
        {socials.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 HACKTRIX. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
