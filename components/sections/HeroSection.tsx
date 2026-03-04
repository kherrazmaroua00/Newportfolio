import Link from "next/link";
import { siteConfig } from "@/lib/data";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16 pt-24 pb-12 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute w-[700px] h-[700px] rounded-full top-[-200px] right-[-100px] bg-radial pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,76,42,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] left-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,76,42,0.04) 0%, transparent 70%)" }}
      />

      {/* Left */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.16em] uppercase text-green-muted mb-8 before:content-[''] before:block before:w-8 before:h-px before:bg-green-muted">
          {siteConfig.tagline}
        </div>

        <h1
          className="text-[clamp(3.5rem,6vw,6rem)] leading-[1.05] font-light text-green mb-3"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Hi, I&apos;m
          <br />
          <em className="font-light text-green-light not-italic">{siteConfig.name}</em>
        </h1>

        <p className="text-[0.8rem] tracking-[0.1em] uppercase text-green-muted mb-8">
          {siteConfig.role}
        </p>

        <p
          className="text-xl font-light leading-[1.75] text-[#1e2e18]/80 max-w-[440px] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          I craft digital experiences that blend elegant design with clean,
          purposeful code — turning ideas into interfaces people love to use.
        </p>

        <div className="flex gap-4 items-center flex-wrap">
          <Link
            href="#projects"
            className="bg-green text-cream px-9 py-3.5 text-[0.72rem] tracking-[0.12em] uppercase no-underline hover:bg-green-light transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="text-green px-6 py-3.5 text-[0.72rem] tracking-[0.12em] uppercase border border-green/35 no-underline hover:border-green transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Right — photo placeholder */}
      <div className="relative z-10 hidden lg:flex justify-center items-center">
        <div className="relative w-[380px] h-[480px]">
          {/* Frame decoration */}
          <div className="absolute inset-0 border border-green/20 translate-x-4 translate-y-4" />

          {/* Photo placeholder */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-green-faint to-green/12 flex flex-col items-center justify-center gap-4">
            <Image
              src="/marouapic.jpeg"
              alt="Profile photo of Maroua Kherraz"
              width={400}
              height={4000}
              className=" object-fit border-4 border-gray"
            />
           
          </div>

          {/* Stats badge */}
          <div className="absolute -bottom-6 -left-6 bg-green text-cream p-5 z-20 min-w-[140px]">
            <span
              className="text-[2.2rem] font-light block leading-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {siteConfig.yearsExperience}+
            </span>
            <span className="text-[0.62rem] tracking-[0.1em] uppercase opacity-70 mt-1 block">
              Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
