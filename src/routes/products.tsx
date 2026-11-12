import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Qinghe Atelier" },
      { name: "description", content: "Placeholder collection of handmade ceramics and textiles." },
      { property: "og:title", content: "Products — Qinghe Atelier" },
      { property: "og:description", content: "Placeholder collection of handmade ceramics and textiles." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "River Cup", price: "¥ —", img: hero },
  { name: "Clay Bowl", price: "¥ —", img: studio },
  { name: "Mist Vase", price: "¥ —", img: hero },
  { name: "Indigo Cloth", price: "¥ —", img: studio },
  { name: "Stone Plate", price: "¥ —", img: hero },
  { name: "Tea Set", price: "¥ —", img: studio },
];

function Products() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Collection</p>
      <h1 className="mt-4 text-5xl">Products</h1>
      <p className="mt-4 text-muted-foreground">Placeholder items for display only. Not available for purchase.</p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <article key={p.name}>
            <img src={p.img} alt={`Placeholder for ${p.name}`} loading="lazy" width={600} height={600}
              className={`aspect-square w-full rounded-sm object-cover ${i % 2 ? "object-left" : "object-center"}`} />
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="text-2xl">{p.name}</h2>
              <span className="text-sm text-muted-foreground">{p.price}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Placeholder description of the piece.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
