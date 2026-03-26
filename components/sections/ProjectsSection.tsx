import Link from "next/link";
import { projects } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-8 lg:px-16">
      <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
        <div>
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.15] text-green"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Selected Projects
            
          </h2>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Featured project — full width */}
        {featured && (
          <FadeUp className="md:col-span-2">
            <ProjectCard project={featured} large />
          </FadeUp>
        )}

        {/* Remaining projects */}
        {rest.map((project, i) => (
          <FadeUp key={project.id}  delay={i * 100}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden">
      {/* Thumbnail */}
      <div
        className={`w-full bg-green-faint overflow-hidden relative ${
          large ? "aspect-[16/6]" : "aspect-[16/7]"
        }`}
      >
        {/* Pattern bg */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 bg-green/15 absolute inset-0"
          
        >
          <Image src={project.image} alt={project.title} width={1000} height={700} className="object-cover" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-green/88 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
          <Link
            href={project.demoUrl}
            className="text-cream text-[0.7rem] tracking-[0.16em] uppercase no-underline border border-cream/40 px-6 py-2.5 hover:bg-cream/10 hover:border-cream transition-all duration-200"
          >
            Live Demo
          </Link>
          <Link
            href={project.githubUrl}
            className="text-cream text-[0.7rem] tracking-[0.16em] uppercase no-underline border border-cream/40 px-6 py-2.5 hover:bg-cream/10 hover:border-cream transition-all duration-200"
          >
            GitHub
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="py-5 flex justify-between items-start border-b border-green/10">
        <div>
          <h3
            className="text-xl font-normal text-green"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {project.title}
          </h3>
          <div className="flex gap-2 flex-wrap mt-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.6rem] tracking-[0.1em] uppercase text-green-muted bg-green-faint px-2 py-0.5 border border-green/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-[0.68rem] text-green/40 whitespace-nowrap ml-4 mt-1">
          {project.year}
        </span>
      </div>
    </div>
  );
}
