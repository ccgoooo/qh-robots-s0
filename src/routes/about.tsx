import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Qinghe Atelier" },
      { name: "description", content: "The story behind Qinghe Atelier, a fictional studio of quiet craft." },
      { property: "og:title", content: "About — Qinghe Atelier" },
      { property: "og:description", content: "The story behind Qinghe Atelier, a fictional studio of quiet craft." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <img src={studio} alt="Placeholder: workshop table" width={1200} height={1200} loading="lazy" className="w-full rounded-sm object-cover" />
      <div>
        <p className="eyebrow">About</p>
        <h1 className="mt-4 text-5xl">A small studio by the river.</h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Placeholder text for the studio's story.</p>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
    </section>
  );
}
