import { testimonials } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export default function TestimonialsSection() {
  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 px-8 lg:px-16 overflow-hidden">
      <FadeUp>
        <SectionLabel>Kind Words</SectionLabel>
        <h2
          className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-green mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What clients say about working with me
        </h2>
      </FadeUp>

      {/* Marquee track */}
      <div className="overflow-hidden -mx-8 lg:-mx-16">
        <div
          className="flex gap-8 w-max animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream border border-green/10 p-9 w-[380px] flex-shrink-0 relative"
            >
              {/* Quote mark */}
              <span
                className="absolute -top-2 left-5 text-8xl text-green/8 leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
                aria-hidden
              >
                "
              </span>

              <p
                className="text-[1.05rem] leading-[1.8] text-[#1e2e18]/80 mb-6 relative z-10"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-faint border border-green/15 flex items-center justify-center font-cormorant text-green text-lg"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[0.72rem] font-medium text-green tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-[0.62rem] text-green-muted mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
