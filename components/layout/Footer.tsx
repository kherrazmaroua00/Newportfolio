import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green border-t border-cream/10 px-16 py-8 flex justify-between items-center">
      <span className="text-[0.65rem] text-cream/40 tracking-wide">
        © {new Date().getFullYear()} Maroua. All rights reserved.
      </span>
      <Link
        href="#hero"
        className="text-[0.8rem] tracking-[0.12em] uppercase text-cream/50 no-underline hover:text-cream transition-colors duration-200"
      >
        Back to top ↑
      </Link>
    </footer>
  );
}
