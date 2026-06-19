import { Container, SectionHeading } from "./ui";
import { FAQS } from "@/lib/faqs";

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
        />

        <div className="mx-auto grid w-full max-w-3xl gap-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors open:border-gradient-brand"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {q}
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
