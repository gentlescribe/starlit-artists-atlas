import { ChevronDown } from "lucide-react";

export function BioSection({ onNext }: { onNext: () => void }) {
  return (
    <section
      id="bio"
      className="relative flex h-dvh snap-start snap-always flex-col items-center justify-center px-6 text-center"
    >
      <p className="animate-rise font-serif text-xs uppercase tracking-[0.5em] text-muted-foreground md:text-sm">
        Portfolio · Volume I
      </p>

      <h1
        className="animate-rise mt-6 font-display text-6xl font-normal leading-none tracking-tight text-foreground md:text-8xl lg:text-9xl"
        style={{ animationDelay: "0.15s" }}
      >
        Amara <span className="italic">Vale</span>
      </h1>

      <div
        className="animate-rise mt-8 flex items-center gap-4 text-gold"
        style={{ animationDelay: "0.3s" }}
        aria-hidden
      >
        <span className="h-px w-12 bg-gold/50 md:w-20" />
        <span className="text-sm">✦</span>
        <span className="h-px w-12 bg-gold/50 md:w-20" />
      </div>

      <h2
        className="animate-rise mt-6 font-display text-xl italic text-foreground/90 md:text-2xl"
        style={{ animationDelay: "0.4s" }}
      >
        Illustrator &amp; writer of quiet, celestial worlds
      </h2>

      <p
        className="animate-rise mt-6 max-w-xl font-serif text-lg leading-relaxed text-foreground/70 md:text-xl"
        style={{ animationDelay: "0.55s" }}
      >
        I paint moths that carry galaxies and lighthouses that talk to nebulae. My work lives
        between gouache, gold ink and the small hours of the night — half sketchbook, half
        mythology, always looking up.
      </p>

      <button
        type="button"
        onClick={onNext}
        aria-label="Scroll to the workbench"
        className="animate-soft-bounce absolute bottom-8 flex flex-col items-center gap-1 rounded-full p-2 text-foreground/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <span className="font-serif text-[0.65rem] uppercase tracking-[0.4em]">Workbench</span>
        <ChevronDown className="h-6 w-6" strokeWidth={1.25} />
      </button>
    </section>
  );
}
