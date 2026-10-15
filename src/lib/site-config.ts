export const siteConfig = {
  name: "GreenFields Agriculture",
  tagline: "Growing a resilient future, from the soil up.",
  description:
    "GreenFields Agriculture shares practical guidance, field-tested research and training resources for sustainable crop production, soil health, irrigation and livestock care.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=630&fit=crop",
  developer: "GoSoft Labs",
  logo: {
    icon: "sprout" as const,
  },
  contact: {
    email: "hello@greenfields.example",
    phone: "+1 (555) 014-2200",
    address: "48 Harvest Lane, Greenbelt Valley, CA 95030",
    hours: "Mon – Fri · 8:00 AM – 5:00 PM",
  },
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
    { label: "X", href: "https://x.com", icon: "x" as const },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  ],
  footerText:
    "GreenFields Agriculture is a demonstration agricultural knowledge platform built for farmers, agronomists and food producers.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;
