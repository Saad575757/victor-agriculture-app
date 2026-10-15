import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Handshake,
  Leaf,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { getStats } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — our mission, our approach to sustainable agriculture and the team behind our farming resources.`,
  openGraph: {
    title: `About ${siteConfig.name}`,
    description:
      "Our mission is to make field-tested agricultural knowledge accessible to every grower.",
  },
};

const values = [
  {
    icon: FlaskConical,
    title: "Evidence first",
    description:
      "Every recommendation is grounded in field trials and soil science, not marketing claims.",
  },
  {
    icon: Leaf,
    title: "Regenerative by default",
    description:
      "We favour practices that build soil carbon, biodiversity and long-term farm resilience.",
  },
  {
    icon: Handshake,
    title: "Built with farmers",
    description:
      "Our guidance is developed alongside working growers so it fits real labour and budget constraints.",
  },
  {
    icon: ShieldCheck,
    title: "Honest and practical",
    description:
      "We tell you what works, what it costs and where a practice will not pay on your ground.",
  },
];

const team = [
  {
    name: "Dr. Amara Okafor",
    role: "Chief Agronomist",
    focus: "Soil biology and integrated pest management",
  },
  {
    name: "Priya Nair",
    role: "Irrigation Specialist",
    focus: "Water-efficient systems and scheduling",
  },
  {
    name: "Miguel Santos",
    role: "Livestock Advisor",
    focus: "Pasture management and herd health",
  },
];

export default async function AboutPage() {
  const stats = await getStats();

  return (
    <>
      <PageHeader
        eyebrow={`About ${siteConfig.name}`}
        title="Helping growers make better decisions every season"
        description="We are an independent agricultural knowledge platform supporting farmers, agronomists and food producers with practical, field-tested guidance."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our mission"
              title="Better information, healthier farms"
              description="Agriculture faces rising input costs, unpredictable weather and pressure to protect natural resources. Our role is to translate research into practices that work on real farms."
            />
            <p className="text-sm/relaxed text-muted-foreground sm:text-base/relaxed">
              Since our first field trials, we have focused on three things: measuring the
              impact of practices in local conditions, documenting what actually works, and
              making that knowledge freely accessible. Today our library covers crop
              farming, soil health, organic production, irrigation and livestock
              management.
            </p>
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-secondary/40 p-5">
              <div>
                <p className="font-heading text-2xl font-semibold text-primary">
                  {stats.categoryCount}
                </p>
                <p className="text-xs text-muted-foreground">Focus areas</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold text-primary">
                  {stats.articleCount}
                </p>
                <p className="text-xs text-muted-foreground">Field guides</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold text-primary">
                  {stats.productCount}
                </p>
                <p className="text-xs text-muted-foreground">Advisory services</p>
              </div>
            </div>
            <Button
              className="h-11 px-5"
              render={
                <Link href="/articles">
                  <BookOpen className="size-4" aria-hidden="true" />
                  Read our articles
                </Link>
              }
            />
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
              <Image
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80"
                alt="Rows of vines on a sustainable farm"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl bg-card p-4 shadow-lg ring-1 ring-foreground/10">
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                <Sprout className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold">Independent &amp; field-led</p>
                <p className="text-xs text-muted-foreground">
                  No product sponsorships in our guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="How we work"
            title="The principles behind every recommendation"
            description="These values shape what we publish and how we advise farms of every size."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-semibold">{value.title}</h3>
                  <p className="text-sm/relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Our team"
          title="Specialists who farm as well as advise"
          description="Our agronomy team combines research backgrounds with hands-on growing experience."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-sm/relaxed text-muted-foreground">{member.focus}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button
            variant="outline"
            className="h-11"
            render={
              <Link href="/contact">
                Work with our team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
