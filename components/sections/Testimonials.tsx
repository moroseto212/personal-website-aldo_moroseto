import { Quote } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { testimonials } from "@/data/projects";

export default function Testimonials() {
  return (
    <section className="border-t border-line bg-surface/30 py-16 md:py-28">
      <div className="container-page">
        <SectionHeading
          label="Testimoni"
          title="Kata mereka yang bekerja sama"
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1} className="h-full">
              <figure className="card flex h-full flex-col p-6 md:p-7">
                <Quote size={20} className="text-accent" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs text-faint">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
