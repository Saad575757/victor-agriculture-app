import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { socialIcons } from "@/components/site/social-icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

const exploreLinks = [
  { href: "/about", label: "About us" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/products", label: "Products & Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest text-forest-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Logo inverted />
            <p className="max-w-sm text-sm/relaxed text-forest-foreground/75">
              {siteConfig.footerText}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-9 items-center justify-center rounded-lg bg-forest-foreground/10 text-forest-foreground transition-colors hover:bg-forest-foreground/20"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-forest-foreground/70">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-foreground/80 transition-colors hover:text-forest-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-forest-foreground/70">
              Get in touch
            </h2>
            <ul className="space-y-3 text-sm text-forest-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-forest-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-forest-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-forest-foreground/15" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-forest-foreground/70 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; developed by{" "}
            <span className="font-medium text-forest-foreground">
              {siteConfig.developer}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
