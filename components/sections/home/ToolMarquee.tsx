import Marquee from "@/components/ui/Marquee";

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Vercel",
  "Storybook",
];

export default function ToolMarquee() {
  return (
    <section className="py-10 md:py-14" aria-label="Teknologi yang digunakan">
      <div className="container-page">
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-faint uppercase">
          Alat yang dipakai sehari-hari
        </p>
        <Marquee duration={38}>
          {tools.map((tool) => (
            <span
              key={tool}
              className="whitespace-nowrap text-lg font-medium tracking-tight text-faint transition-colors hover:text-foreground md:text-2xl"
            >
              {tool}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
