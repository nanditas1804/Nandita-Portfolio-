import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
    "I write code thinking about the developer who maintains it next. Readability and structure are not optional extras.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I build interfaces that work reliably under real conditions, high data volumes, complex workflows, and production environments where stability is non-negotiable.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Good products come from engineers who talk to designers, PMs, and each other. I've worked that way from day one.",
  },
  {
    icon: Lightbulb,
    title: "Ownership",
    description:
    "I take full responsibility for what I build. Every detail gets proper attention, and I don't stop until the work is done right.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Built for scale, designed for humans.


              <span className="font-serif italic font-normal text-white">
                {" "}
                Clean code. Real impact.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              I'm a software engineer with 3+ years of experience turning complex business logic into interfaces that just work.
              </p>
              <p>
              At Capgemini, I built enterprise-grade web applications for Swiss Re, one of the world's largest reinsurers, owning the policy management module end-to-end, shipping to 300+ enterprise users, and maintaining 85%+ test coverage across business-critical workflows. The environment was demanding, the standards were high, and I thrived in it.
              </p>
              <p>
              I bring the same rigour to everything I build: clean architecture, readable code, and a deep respect for the person sitting on the other side of the screen.</p>
              <p>
            Currently based in Frankfurt am Main, I'm actively exploring new opportunities in the German tech market. If you're looking for a software engineer who takes ownership, thinks in systems, and delivers, I'd love to connect.
              </p>
            </div>

            {/*<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
  </div>*/}
  </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};