import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/page-header";
import { socialIcons } from "@/components/site/social-icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} about agricultural products, advisory services, soil testing or partnership enquiries.`,
  openGraph: {
    title: `Contact ${siteConfig.name}`,
    description:
      "Reach our agronomy team by phone, email or through the inquiry form.",
  },
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit us",
    value: siteConfig.contact.address,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: Clock,
    label: "Office hours",
    value: siteConfig.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact our agronomy team"
        description="Questions about crops, soil, irrigation or livestock? Send us a message and a specialist will get back to you within two business days."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
            <h2 className="font-heading text-xl font-semibold">Send an inquiry</h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              All fields are required. We treat your details confidentially.
            </p>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-secondary/40 p-6">
              <h2 className="font-heading text-lg font-semibold">Contact details</h2>
              <ul className="mt-5 space-y-5">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary ring-1 ring-foreground/10">
                      <detail.icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-medium text-foreground hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
              <h2 className="font-heading text-lg font-semibold">Follow our work</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Seasonal updates, field notes and new resources.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {siteConfig.social.map((item) => {
                  const Icon = socialIcons[item.icon];
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
