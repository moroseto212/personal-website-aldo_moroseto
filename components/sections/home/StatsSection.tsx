import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { stats } from "@/data/profile";

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-surface/40 py-12 md:py-16">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-8 md:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="text-center md:text-left">
                <p className="text-4xl font-semibold tracking-tight whitespace-nowrap md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-faint">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
