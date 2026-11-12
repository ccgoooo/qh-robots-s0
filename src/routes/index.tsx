import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qinghe Atelier — Quiet, handmade objects" },
      { name: "description", content: "A fictional small studio making calm, handmade objects for everyday rituals." },
      { property: "og:title", content: "Qinghe Atelier — Quiet, handmade objects" },
      { property: "og:description", content: "A fictional small studio making calm, handmade objects for everyday rituals." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:py-24">
        <div>
          <p className="eyebrow">Est. placeholder year</p>
          <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Objects shaped by clear water and slow hands.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild><Link to="/products">View products</Link></Button>
            <Button asChild variant="outline"><Link to="/about">Our story</Link></Button>
          </div>
        </div>
        <img src={hero} alt="Placeholder: ceramic cups on linen" width={1600} height={1008} className="w-full rounded-sm object-cover" />
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {["Made slowly", "Natural materials", "Small batches"].map((t) => (
            <div key={t}>
              <h2 className="text-2xl">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Placeholder text describing this value. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
