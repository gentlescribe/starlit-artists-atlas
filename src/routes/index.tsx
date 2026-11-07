import { createFileRoute } from "@tanstack/react-router";
import { Starfield } from "@/components/portfolio/Starfield";
import { BioSection } from "@/components/portfolio/BioSection";
import { ArtBook } from "@/components/portfolio/ArtBook";
import { WritingFolder } from "@/components/portfolio/WritingFolder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amara Vale — Illustrator & Writer of Celestial Worlds" },
      {
        name: "description",
        content: "Portfolio of Amara Vale: gouache and gold-ink artworks in a turning art book, and notes, essays and lore in a writing folder.",
      },
      { property: "og:title", content: "Amara Vale — Celestial Studies" },
      {
        property: "og:description",
        content: "Flip through a sketchbook of cosmic artworks and read notes, essays and lore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToWorkbench = () => {
    document.getElementById("workbench")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Starfield />
      <main className="hide-scrollbar relative z-10 h-dvh snap-y snap-mandatory overflow-y-scroll overscroll-none">
        <BioSection onNext={scrollToWorkbench} />

        <section
          id="workbench"
          className="flex h-dvh snap-start snap-always flex-col items-center justify-center gap-5 overflow-hidden px-4 py-6 lg:gap-10"
        >
          <header className="text-center">
            <p className="font-serif text-[0.65rem] uppercase tracking-[0.5em] text-muted-foreground">
              Section II
            </p>
            <h2 className="mt-1 font-display text-2xl italic text-foreground lg:text-4xl">The Workbench</h2>
          </header>

          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-[6vw]">
            <ArtBook />
            <WritingFolder />
          </div>
        </section>
      </main>
    </>
  );
}
