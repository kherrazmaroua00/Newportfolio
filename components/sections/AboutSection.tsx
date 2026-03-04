import { siteConfig, skills } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-green/15 to-transparent" />

      {/* Left — image stacks */}
      <FadeUp className="hidden lg:block">
        <div className="relative h-[520px]">
          {/* Main image frame */}
          <div className="absolute w-[300px] h-[400px] top-0 right-0 bg-gradient-to-br from-green-faint to-green/10 border border-green/15 flex items-center justify-center">
            <Image
              src="/marouapic2.jpeg"
              alt="Profile photo of Maroua Kherraz"
              width={500}
              height={500}
              className=" object-fit border-4 border-gray"
            />
          </div>

          {/* Stats card */}
          <div className="absolute w-[200px] h-[260px] bottom-0 left-0 bg-green flex flex-col items-center justify-center p-6 text-center">
            <span
              className="text-5xl font-light text-cream leading-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {siteConfig.projectsCompleted}+
            </span>
            <span className="text-[0.62rem] tracking-[0.1em] uppercase text-cream/70 mt-2">
              Projects Completed
            </span>
          </div>
        </div>
      </FadeUp>

      {/* Right — text */}
      <FadeUp delay={100}>
        <SectionLabel>About Me</SectionLabel>
        <h2
          className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-green mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Designing with
          <br />
          <em>purpose &amp; passion</em>
        </h2>

        {siteConfig.bio.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg font-light leading-[1.85] text-[#1e2e18]/80 mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {paragraph}
          </p>
        ))}

        <div className="grid grid-cols-2 gap-2 mt-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-green/20 text-green px-4 rounded-2xl py-2 text-[0.68rem] tracking-[0.08em] uppercase border border-green/12 hover:bg-green/12 hover:translate-x-1 transition-all duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
