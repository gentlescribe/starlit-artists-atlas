import moth from "@/assets/art-moth.jpg";
import lighthouse from "@/assets/art-lighthouse.jpg";
import moon from "@/assets/art-moon.jpg";
import bloom from "@/assets/art-bloom.jpg";

export type Artwork = {
  plate: string;
  pageNo: number;
  title: string;
  medium: string;
  year: string;
  src: string;
};

export const ARTWORKS: Artwork[] = [
  { plate: "I", pageNo: 3, title: "The Luna Saint", medium: "Gouache & gold ink on cotton paper", year: "2025", src: moth },
  { plate: "II", pageNo: 4, title: "Keeper of the Nebula", medium: "Ink & watercolour wash", year: "2025", src: lighthouse },
  { plate: "III", pageNo: 5, title: "Crescent Lullaby", medium: "Gouache, gilt highlights", year: "2026", src: moon },
  { plate: "IV", pageNo: 6, title: "Night-Blooming Cereus", medium: "Botanical study, gold leaf", year: "2026", src: bloom },
];

export type WritingTab = "notes" | "essays" | "lore";

export const WRITING_TABS: { id: WritingTab; label: string }[] = [
  { id: "notes", label: "✦ Notes" },
  { id: "essays", label: "✦ Essays" },
  { id: "lore", label: "✦ Lore" },
];
