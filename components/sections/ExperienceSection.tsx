import { experiences, education } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-8 lg:px-16  relative">
      <FadeUp>
        <SectionLabel>My Journey</SectionLabel>
        <h2
          className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-green mb-16"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Experience &amp; Education
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Work experience */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-green/90 mb-8 pb-4 border-b border-green/15">
            Work Experience
          </p>
          {experiences.map((item, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="py-7 border-b border-green/8 grid grid-cols-[8px_1fr] gap-6 items-start">
                <div className="w-2 h-2 rounded-full bg-green mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[0.62rem] tracking-[0.1em] text-green/90 mb-1">
                    {item.year}
                  </p>
                  <h3
                    className="text-lg font-normal text-green mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[0.7rem] text-green/50 mb-2">{item.place}</p>
                  <p className="text-[0.75rem] leading-[1.75] text-green/85">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Education */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-green/90 mb-8 pb-4 border-b border-green/15">
            Education &amp; Certifications
          </p>
          {education.map((item, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="py-7 border-b border-green/8 grid grid-cols-[8px_1fr] gap-6 items-start">
                <div className="w-2 h-2 rounded-full bg-green mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[0.62rem] tracking-[0.1em] text-green/90 mb-1">
                    {item.year}
                  </p>
                  <h3
                    className="text-lg font-normal text-green mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[0.7rem] text-green/50 mb-2">{item.place}</p>
                  <p className="text-[0.75rem] leading-[1.75] text-green/85">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
