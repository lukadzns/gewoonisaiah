// Alle teksten en gegevens op één plek. Pas hier aan, de pagina volgt vanzelf.
// Velden met `null` worden op de site niet getoond.

export const person = {
  name: "Isiah Kolf",
  first: "Isiah",
  last: "Kolf",
  role: "Mediavormgever",
  intro: "Ik ontwerp huisstijlen, social visuals en drukwerk.",
  about: "Ik ben Isiah, mediavormgever. Hier laat ik een selectie van mijn werk zien.",
  // Vul in om het contactblok en de menulink automatisch te tonen:
  email: null as string | null,
  instagram: null as string | null, // volledige URL
  linkedin: null as string | null, // volledige URL
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string | null;
  // Voorlopig stockfoto's (picsum.photos geeft per "seed" steeds dezelfde foto).
  // Vervang `image` door een eigen bestand in /public/work, bijvoorbeeld "/work/project-1.jpg".
  image: string | null;
  seed: string;
  alt: string;
  href: string | null; // link naar een casepagina, als die er is
};

export const projects: Project[] = [
  { slug: "project-1", title: "Projecttitel", category: "Huisstijl", year: null, image: null, seed: "kolf-huisstijl", alt: "Voorbeeldafbeelding voor een huisstijlproject", href: null },
  { slug: "project-2", title: "Projecttitel", category: "Social media", year: null, image: null, seed: "kolf-social", alt: "Voorbeeldafbeelding voor een social-mediaproject", href: null },
  { slug: "project-3", title: "Projecttitel", category: "Drukwerk", year: null, image: null, seed: "kolf-print", alt: "Voorbeeldafbeelding voor een drukwerkproject", href: null },
  { slug: "project-4", title: "Projecttitel", category: "Webdesign", year: null, image: null, seed: "kolf-web", alt: "Voorbeeldafbeelding voor een webdesignproject", href: null },
  { slug: "project-5", title: "Projecttitel", category: "Huisstijl", year: null, image: null, seed: "kolf-brand", alt: "Voorbeeldafbeelding voor een tweede huisstijlproject", href: null },
  { slug: "project-6", title: "Projecttitel", category: "Social media", year: null, image: null, seed: "kolf-campagne", alt: "Voorbeeldafbeelding voor een tweede social-mediaproject", href: null },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));

export function imageFor(p: Project, w: number, h: number) {
  return p.image ?? `https://picsum.photos/seed/${p.seed}/${w}/${h}`;
}
