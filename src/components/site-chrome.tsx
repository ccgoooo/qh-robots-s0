import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          Qinghe Atelier
        </Link>
        <nav className="flex gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground underline underline-offset-8" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span className="font-serif text-base text-foreground">Qinghe Atelier</span>
        <span>A fictional studio. All content is placeholder.</span>
      </div>
    </footer>
  );
}
