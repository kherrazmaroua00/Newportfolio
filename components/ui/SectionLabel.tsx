interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase mb-6 ${
        light ? "text-cream/50" : "text-green-muted"
      }`}
    >
      {children}
      <span
        className={`block h-px w-14 ${light ? "bg-cream/15" : "bg-green/20"}`}
      />
    </div>
  );
}
