import { services } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { Monitor, Code2, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={22} strokeWidth={1.5} />,
  code: <Code2 size={22} strokeWidth={1.5} />,
  globe: <Globe size={22} strokeWidth={1.5} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-8 lg:px-16 bg-green relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute w-[600px] h-[600px] rounded-full -top-[200px] -right-[200px] border border-cream/6 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full -bottom-[100px] -left-[100px] border border-cream/6 pointer-events-none" />

      <FadeUp className="mb-16 text-[0.62rem] tracking-[0.16em] text-cream/35">
        <SectionLabel  light>What I Do</SectionLabel>
        <h2
          className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-cream"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Services I Offer
          
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-cream/8">
        {services.map((service, i) => (
          <FadeUp
            key={service.num}
            delay={i * 100}
            className="group bg-green border border-cream/20 p-11 relative overflow-hidden hover:bg-green/10 transition-colors duration-300"
          >
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cream/65 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

            <span className="text-[0.62rem] tracking-[0.16em] text-cream/85 mb-7 block">
              {service.num}
            </span>

            <div className="w-11 h-11 border border-cream/20 flex items-center justify-center text-cream mb-6">
              {iconMap[service.icon]}
            </div>

            <h3
              className="text-2xl font-normal text-cream mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {service.title}
            </h3>

            <p className="text-[0.75rem] leading-[1.8] text-cream/60">
              {service.description}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
