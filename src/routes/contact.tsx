import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Qinghe Atelier" },
      { name: "description", content: "Send a note to the fictional Qinghe Atelier studio." },
      { property: "og:title", content: "Contact — Qinghe Atelier" },
      { property: "og:description", content: "Send a note to the fictional Qinghe Atelier studio." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter a name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    // Demo only: nothing is stored or sent anywhere.
    setErrors({});
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-16 md:py-24">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 text-5xl">Say hello.</h1>
      <p className="mt-4 text-muted-foreground">This is a demo form — nothing you enter is saved or sent.</p>
      {sent ? (
        <div role="status" className="mt-10 rounded-sm border border-border bg-secondary p-8">
          <h2 className="text-3xl">Thank you.</h2>
          <p className="mt-2 text-muted-foreground">Your message was received (demo only).</p>
          <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>Send another</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
          {(["name", "email"] as const).map((f) => (
            <div key={f} className="space-y-2">
              <Label htmlFor={f} className="capitalize">{f}</Label>
              <Input id={f} name={f} type={f === "email" ? "email" : "text"} maxLength={f === "email" ? 255 : 100}
                placeholder={f === "email" ? "you@example.com" : "Your name"} />
              {errors[f] && <p className="text-sm text-destructive">{errors[f]}</p>}
            </div>
          ))}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="Lorem ipsum..." />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit">Send message</Button>
        </form>
      )}
    </section>
  );
}
