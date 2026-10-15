export type PublishStatus = "draft" | "published";

export type CategoryIconKey =
  | "wheat"
  | "leaf"
  | "flask"
  | "droplets"
  | "beef"
  | "recycle";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: CategoryIconKey;
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  status: PublishStatus;
  isFeatured: boolean;
  publishedAt: string | null;
  categoryId: string | null;
  authorName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  status: PublishStatus;
  categoryId: string | null;
  createdAt: string;
  updatedAt: string;
}

const categories: Category[] = [
  {
    id: "cat-crop-farming",
    name: "Crop Farming",
    slug: "crop-farming",
    description:
      "Field-tested guidance for planning rotations, choosing varieties and lifting yields on working farms.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    icon: "wheat",
    createdAt: "2025-11-02T09:00:00.000Z",
    updatedAt: "2026-01-18T09:00:00.000Z",
  },
  {
    id: "cat-organic-agriculture",
    name: "Organic Agriculture",
    slug: "organic-agriculture",
    description:
      "Certified organic methods, natural inputs and biological approaches that keep produce free of synthetic chemicals.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80",
    icon: "leaf",
    createdAt: "2025-11-02T09:10:00.000Z",
    updatedAt: "2026-01-20T09:10:00.000Z",
  },
  {
    id: "cat-soil-health",
    name: "Soil Health",
    slug: "soil-health",
    description:
      "Soil biology, structure and nutrient management practices that build long-term fertility and resilience.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    icon: "flask",
    createdAt: "2025-11-02T09:20:00.000Z",
    updatedAt: "2026-01-22T09:20:00.000Z",
  },
  {
    id: "cat-irrigation",
    name: "Irrigation",
    slug: "irrigation",
    description:
      "Water-efficient irrigation systems, scheduling techniques and moisture monitoring for every farm size.",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    icon: "droplets",
    createdAt: "2025-11-02T09:30:00.000Z",
    updatedAt: "2026-01-25T09:30:00.000Z",
  },
  {
    id: "cat-livestock",
    name: "Livestock",
    slug: "livestock",
    description:
      "Animal husbandry, pasture management and herd health practices for productive, low-stress farms.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    icon: "beef",
    createdAt: "2025-11-02T09:40:00.000Z",
    updatedAt: "2026-01-27T09:40:00.000Z",
  },
  {
    id: "cat-sustainable-farming",
    name: "Sustainable Farming",
    slug: "sustainable-farming",
    description:
      "Regenerative systems that improve productivity while protecting water, soil and biodiversity.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    icon: "recycle",
    createdAt: "2025-11-02T09:50:00.000Z",
    updatedAt: "2026-01-29T09:50:00.000Z",
  },
];

const articles: Article[] = [
  {
    id: "art-sustainable-farming-practices",
    title: "Sustainable Farming Practices for Productive Land",
    slug: "sustainable-farming-practices",
    excerpt:
      "A practical introduction to regenerative principles — reduced tillage, diverse rotations and living roots — and how they translate into resilient, profitable fields.",
    content: `Sustainable farming is not a single technique. It is a way of managing land so that every season leaves the soil, water and biodiversity in better condition than it found them.

## Start with soil cover

Bare soil erodes, crusts and loses organic matter. Keeping the ground covered with residue, cover crops or mulch protects structure and feeds the soil biology that cycles nutrients for you.

- Retain crop residue instead of burning or removing it
- Sow cover crops in every fallow window
- Consider strip-tillage where full no-till is impractical on heavy ground

## Diversify the rotation

Monoculture invites pests and depletes specific nutrients. A four-year rotation that alternates cereals, legumes, brassicas and a restorative break crop interrupts pest cycles and spreads labour across the calendar.

Legumes such as clover, vetch and field peas fix atmospheric nitrogen, reducing fertiliser dependence for the following cash crop.

## Reduce disturbance

Each pass with a plough or heavy cultivator oxidises organic carbon and damages fungal networks. Reduced-tillage systems build aggregation over time and improve infiltration, which pays off in both drought and heavy rain.

## Measure what matters

Record organic matter, infiltration rate and yield per hectare each season. Trends matter more than single readings, and the data will tell you which practices earn their place on your farm.

> Regenerative farming is a direction, not a destination. Small, consistent changes compound year after year.`,
    featuredImage:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-02-10T08:00:00.000Z",
    categoryId: "cat-sustainable-farming",
    authorName: "Dr. Amara Okafor",
    createdAt: "2026-02-01T08:00:00.000Z",
    updatedAt: "2026-02-10T08:00:00.000Z",
  },
  {
    id: "art-understanding-soil-health",
    title: "Understanding Soil Health: Reading the Ground Beneath You",
    slug: "understanding-soil-health",
    excerpt:
      "Texture, structure, biology and chemistry all shape how a soil performs. Learn a simple field method for assessing soil health without a laboratory.",
    content: `Healthy soil is a living system. Before reaching for a fertiliser bag, it pays to understand what your soil already has.

## The four pillars

Soil health rests on four interacting properties: physical structure, biological activity, chemical balance and organic matter content. Improving one usually lifts the others.

## A simple field assessment

Take a spade of topsoil from three or four representative spots and work through these observations:

- **Structure** — does the soil crumble into aggregates, or does it break into hard clods?
- **Roots** — are roots deep, white and branching, or shallow and stubby?
- **Earthworms** — six to ten worms per spade is a good working benchmark.
- **Smell** — a sweet, earthy aroma indicates active microbial life.

## Understanding your results

Crumbly aggregates and abundant roots point to good structure and biology. Hard pans or a sour smell indicate compaction and low oxygen, which restrict root growth and nutrient uptake.

## Building from here

Add organic matter through compost, manure or cover crops. Minimise traffic on wet ground to avoid compaction. Where pH is out of range, correct it gradually so nutrients already in the soil become available again.

> A soil test tells you what is there. A spade and your hands tell you whether the biology can access it.`,
    featuredImage:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-02-14T08:00:00.000Z",
    categoryId: "cat-soil-health",
    authorName: "Miguel Santos",
    createdAt: "2026-02-05T08:00:00.000Z",
    updatedAt: "2026-02-14T08:00:00.000Z",
  },
  {
    id: "art-efficient-irrigation-methods",
    title: "Efficient Irrigation Methods That Cut Water Use",
    slug: "efficient-irrigation-methods",
    excerpt:
      "From drip lines to soil-moisture scheduling, these irrigation strategies deliver more crop per drop without expensive infrastructure.",
    content: `Water is often the largest variable cost on a farm. Matching application to crop demand is the fastest route to savings.

## Know your soil's water-holding capacity

Sandy soils hold roughly 60 mm of plant-available water per metre of depth; clay loams can hold twice that. Irrigating sandy ground little and often, and heavier soils less frequently but more deeply, keeps the root zone in the ideal range.

## Drip and micro-sprinkler systems

Drip irrigation places water directly at the root zone, eliminating evaporation and runoff losses that can waste half of a sprinkler application. Modern thin-wall drip tape makes the technology affordable even for seasonal vegetable crops.

- 30–50% typical water saving over overhead sprinklers
- Reduced foliar disease because leaves stay dry
- Fertigation becomes simple and precise

## Schedule with data, not habit

Tensiometers, capacitance probes or even a hand-squeeze test give you a real trigger for irrigation. Irrigate when 40–50% of available water has been used, then refill the profile.

## Protect every drop

Mulch reduces surface evaporation, and windbreaks cut drift losses. Together with a well-scheduled drip system they can reduce total water use by more than half.

> The cheapest water is the water you never had to pump.`,
    featuredImage:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-02-18T08:00:00.000Z",
    categoryId: "cat-irrigation",
    authorName: "Priya Nair",
    createdAt: "2026-02-08T08:00:00.000Z",
    updatedAt: "2026-02-18T08:00:00.000Z",
  },
  {
    id: "art-organic-crop-production",
    title: "Organic Crop Production Without Sacrificing Yield",
    slug: "organic-crop-production",
    excerpt:
      "Certified organic systems can match conventional yields when nutrient cycling, weed control and pest management are planned as a single system.",
    content: `Organic production replaces synthetic inputs with management. Getting the system right takes planning, but the premium and the soil benefits are real.

## Build fertility first

Organic nitrogen comes from legumes, compost and manures. Budget nitrogen per hectare the way you would a cash flow: a good clover ley can contribute 150–250 kg of nitrogen per hectare to the following crop.

## Weed control is a system, not a spray

Design a rotation that lets you cultivate, smother and out-compete weeds.

- Use stale seedbeds to germinate weeds before drilling
- Include competitive cover crops such as rye and buckwheat
- Alternate autumn and spring sowings to disrupt weed life cycles

## Encourage natural enemies

Hedgerows, beetle banks and flowering strips support predators that keep aphids and caterpillars in check. Diversity is the organic grower's insurance policy.

## Certify and document

Keep input records, seed invoices and field diaries from day one. Certification bodies require a paper trail, and it also makes your system easier to improve each season.

> Organic yields come from good agronomy, not from an absence of inputs.`,
    featuredImage:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-02-22T08:00:00.000Z",
    categoryId: "cat-organic-agriculture",
    authorName: "Hannah Weber",
    createdAt: "2026-02-12T08:00:00.000Z",
    updatedAt: "2026-02-22T08:00:00.000Z",
  },
  {
    id: "art-seasonal-crop-planning",
    title: "Seasonal Crop Planning: A Twelve-Month Calendar",
    slug: "seasonal-crop-planning",
    excerpt:
      "Plan rotations, inputs and labour a full season ahead with a simple crop calendar that keeps fields productive all year.",
    content: `Good farms are planned in winter. A crop calendar turns a list of fields into a coordinated sequence of sowings, harvests and restorative breaks.

## Map your fields and constraints

Start with a simple table: field, area, soil type, drainage, irrigation availability and last three crops grown. Constraints become obvious very quickly.

## Assign crops to fields

Rotate by family to break pest and disease cycles — cereals, legumes, brassicas and root crops should each move to a new block every season. Keep the most valuable crops on your best ground.

## Work backwards from harvest

For each crop, note the target harvest window, then calculate drilling date, fertiliser or compost timing and any spraying or cultivation windows in reverse. This is where a calendar earns its keep.

- Add a two-week buffer to every critical operation
- Flag weeks where labour demand peaks
- Schedule cover crops into every gap longer than eight weeks

## Review and adjust

Record actual dates and yields against the plan. After three seasons your calendar becomes a genuinely accurate decision tool.

> A plan written in January saves panic in June.`,
    featuredImage:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-02-26T08:00:00.000Z",
    categoryId: "cat-crop-farming",
    authorName: "Daniel Mensah",
    createdAt: "2026-02-16T08:00:00.000Z",
    updatedAt: "2026-02-26T08:00:00.000Z",
  },
  {
    id: "art-integrated-pest-management",
    title: "Integrated Pest Management in Practice",
    slug: "integrated-pest-management",
    excerpt:
      "Scouting, thresholds and biological controls let you treat pests only when it pays — cutting both input costs and resistance risk.",
    content: `Integrated pest management (IPM) is a decision framework, not a product. It asks a simple question before every spray: will treating now return more than it costs?

## Scout regularly

Walk a W pattern across each field twice a week and record pest counts on a fixed number of plants. Early detection is worth more than any product.

## Use action thresholds

Set a clear economic threshold for each key pest — for example, aphids per leaf or larvae per metre row. Below the threshold, natural enemies are usually doing the work for free.

## Prefer biological and cultural controls

- Conserve predators with flowering strips and undisturbed margins
- Rotate crops to remove host plants
- Choose resistant varieties where available
- Remove crop debris that harbours overwintering pests

## Treat precisely

When a spray is justified, use a selective product, target the vulnerable life stage and rotate active ingredients to slow resistance. Follow label rates and protect pollinators by spraying in the evening.

> Every unnecessary spray costs money and buys resistance.`,
    featuredImage:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-03-02T08:00:00.000Z",
    categoryId: "cat-crop-farming",
    authorName: "Dr. Amara Okafor",
    createdAt: "2026-02-20T08:00:00.000Z",
    updatedAt: "2026-03-02T08:00:00.000Z",
  },
  {
    id: "art-rotational-grazing",
    title: "Rotational Grazing for Healthier Pastures and Herds",
    slug: "rotational-grazing",
    excerpt:
      "Moving livestock on a planned rotation restores pasture density, reduces parasite pressure and improves animal performance.",
    content: `Continuous grazing lets animals pick their favourite plants again and again, which weakens the sward and exposes them to parasites. Rotation fixes both problems.

## Rest is the active ingredient

Grass needs time to regrow and replenish root reserves. Aim for a rest period of 21–40 days depending on growth rate, and graze each paddock hard but quickly.

## Size paddocks to the herd

Divide pasture into paddocks that supply one to three days of feed. Temporary electric fencing makes this flexible and inexpensive.

- Target a residual height of 4–6 cm for most temperate grasses
- Move animals before they graze regrowth
- Extend rest periods during drought, not stocking rate

## Break the parasite cycle

Larvae survive best in the first few centimetres of grass. A long rest period and clean grazing for young stock dramatically reduce worm burdens and the need for drenching.

## Watch the results

Within two seasons you should see denser swards, deeper rooting, fewer bare patches and better daily liveweight gain.

> Grazing management is the cheapest pasture improvement available to any farm.`,
    featuredImage:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-03-06T08:00:00.000Z",
    categoryId: "cat-livestock",
    authorName: "Miguel Santos",
    createdAt: "2026-02-24T08:00:00.000Z",
    updatedAt: "2026-03-06T08:00:00.000Z",
  },
  {
    id: "art-water-conservation-dry-seasons",
    title: "Water Conservation Strategies for Dry Seasons",
    slug: "water-conservation-dry-seasons",
    excerpt:
      "Draft article — storage, mulch and deficit irrigation tactics that keep crops alive through prolonged dry spells.",
    content: `This article is still being written. It will cover on-farm water storage, mulching, deficit irrigation and drought contingency planning.

## Planned sections

- Capturing and storing winter rainfall
- Mulch selection and application rates
- Deficit irrigation schedules that protect yield
- Prioritising blocks when supply is limited`,
    featuredImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
    status: "draft",
    isFeatured: false,
    publishedAt: null,
    categoryId: "cat-irrigation",
    authorName: "Priya Nair",
    createdAt: "2026-03-08T08:00:00.000Z",
    updatedAt: "2026-03-10T08:00:00.000Z",
  },
];

const products: Product[] = [
  {
    id: "prod-drip-irrigation-kit",
    name: "FieldLine Drip Irrigation Kit",
    slug: "fieldline-drip-irrigation-kit",
    shortDescription:
      "A modular drip irrigation kit for one hectare of row crops, including filters, drip tape and connectors.",
    description: `The FieldLine Drip Irrigation Kit is designed for smallholders and commercial row-crop growers who want to move from overhead watering to precise root-zone irrigation.

Each kit covers approximately one hectare and includes a screen filter, pressure regulator, 400 metres of 16 mm drip tape and a full set of connectors and end caps.

- 2.0 L/h emitters at 30 cm spacing
- Operates at 1.0–1.5 bar working pressure
- UV-stabilised tape suitable for multiple seasons
- Compatible with fertigation injectors

Installation typically takes one person a single day for a one-hectare block.`,
    imageUrl:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-irrigation",
    createdAt: "2025-12-01T08:00:00.000Z",
    updatedAt: "2026-01-15T08:00:00.000Z",
  },
  {
    id: "prod-organic-compost",
    name: "Verdant Blend Organic Compost",
    slug: "verdant-blend-organic-compost",
    shortDescription:
      "Certified organic compost with a balanced carbon-to-nitrogen ratio, screened to 10 mm for easy spreading.",
    description: `Verdant Blend is a mature, weed-seed-free compost produced from green waste and livestock manure and composted for sixteen weeks under monitored conditions.

Applied at 5–10 tonnes per hectare it improves water-holding capacity, feeds soil biology and slowly releases nitrogen, phosphorus and potassium.

- Certified organic input
- Carbon-to-nitrogen ratio of approximately 12:1
- Screened to 10 mm for even application
- Available in 1-tonne bulk bags

For best results, incorporate into the top 10 cm of soil or apply as a surface mulch in perennial systems.`,
    imageUrl:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-organic-agriculture",
    createdAt: "2025-12-03T08:00:00.000Z",
    updatedAt: "2026-01-17T08:00:00.000Z",
  },
  {
    id: "prod-soil-testing-service",
    name: "Complete Soil Analysis Service",
    slug: "complete-soil-analysis-service",
    shortDescription:
      "Laboratory soil testing with agronomist recommendations covering nutrients, pH, organic matter and structure.",
    description: `Our soil analysis service combines laboratory chemistry with practical agronomic advice, so you receive a report you can act on immediately.

Send us a representative soil sample and receive results within seven working days, including a written interpretation of your results, a nutrient budget and a prioritised action plan.

- pH, organic matter and cation exchange capacity
- Macro and micronutrient levels
- Soil texture and estimated water-holding capacity
- One-to-one agronomist follow-up call

Repeat sampling every two to three years tracks the effect of management changes over time.`,
    imageUrl:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-soil-health",
    createdAt: "2025-12-05T08:00:00.000Z",
    updatedAt: "2026-01-19T08:00:00.000Z",
  },
  {
    id: "prod-cover-crop-seed-mix",
    name: "Regenera Cover Crop Seed Mix",
    slug: "regenera-cover-crop-seed-mix",
    shortDescription:
      "A four-species cover crop blend for rapid soil cover, nitrogen fixation and improved soil structure.",
    description: `Regenera is a proven cover crop blend of vetch, field peas, oats and radish. It establishes quickly in late summer or early autumn and provides effective ground cover through winter.

The legume component fixes nitrogen, oats add carbon and fibrous roots, and radish breaks compaction with its taproot.

- Sow at 35–45 kg per hectare
- Excellent winter cover and erosion control
- Radish taproot relieves shallow compaction
- Suitable for reduced-tillage systems

Terminate with frost, rolling or mowing before seed set and incorporate or leave as surface mulch.`,
    imageUrl:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-sustainable-farming",
    createdAt: "2025-12-07T08:00:00.000Z",
    updatedAt: "2026-01-21T08:00:00.000Z",
  },
  {
    id: "prod-solar-water-pump",
    name: "SunRise Solar Water Pump",
    slug: "sunrise-solar-water-pump",
    shortDescription:
      "A standalone solar-powered pump for remote paddocks and boreholes — no grid connection or fuel required.",
    description: `SunRise combines a 1.5 kW solar array with a brushless DC pump rated to 60 metres of head, making it ideal for livestock water supply and small-scale irrigation in off-grid locations.

Annual maintenance is limited to cleaning the panels and inspecting the pump intake.

- Up to 12,000 litres per day at 20 m head
- 1.5 kW solar array with mounting frame
- Dry-run protection and float switch control
- Five-year pump warranty

Detailed specification sheet available on request.`,
    imageUrl:
      "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-irrigation",
    createdAt: "2025-12-09T08:00:00.000Z",
    updatedAt: "2026-01-23T08:00:00.000Z",
  },
  {
    id: "prod-livestock-mineral-block",
    name: "PasturePlus Livestock Mineral Blocks",
    slug: "pastureplus-livestock-mineral-blocks",
    shortDescription:
      "Weather-resistant mineral blocks formulated to correct common pasture deficiencies in cattle and sheep.",
    description: `PasturePlus mineral blocks supply the trace elements most commonly lacking in grazed pasture, supporting fertility, growth rates and general herd health.

Each 20 kg block is pressed to resist weathering and can be placed directly in the paddock.

- Balanced calcium to phosphorus ratio
- Copper, cobalt, selenium and iodine
- Weather-resistant formulation
- Suitable for cattle and sheep

Always provide free access to clean water alongside mineral supplementation.`,
    imageUrl:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    status: "published",
    categoryId: "cat-livestock",
    createdAt: "2025-12-11T08:00:00.000Z",
    updatedAt: "2026-01-25T08:00:00.000Z",
  },
];

const PUBLISHED: PublishStatus = "published";

function byDateDesc<T extends { publishedAt?: string | null; name?: string; title?: string }>(
  a: T,
  b: T,
) {
  const aDate = a.publishedAt ?? "";
  const bDate = b.publishedAt ?? "";
  return bDate.localeCompare(aDate);
}

export async function getCategories(): Promise<Category[]> {
  return [...categories].sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return categories.find((category) => category.slug === slug) ?? null;
}

export async function getCategoriesWithCounts(): Promise<
  Array<Category & { articleCount: number }>
> {
  const sorted = await getCategories();
  return sorted.map((category) => ({
    ...category,
    articleCount: articles.filter(
      (article) => article.categoryId === category.id && article.status === PUBLISHED,
    ).length,
  }));
}

export async function getArticles(options?: {
  categoryId?: string | null;
  featured?: boolean;
  limit?: number;
}): Promise<Article[]> {
  let result = articles.filter((article) => article.status === PUBLISHED);

  if (options?.categoryId) {
    result = result.filter((article) => article.categoryId === options.categoryId);
  }

  if (options?.featured) {
    result = result.filter((article) => article.isFeatured);
  }

  result = [...result].sort(byDateDesc);

  if (options?.limit) {
    result = result.slice(0, options.limit);
  }

  return result;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return (
    articles.find((article) => article.slug === slug && article.status === PUBLISHED) ?? null
  );
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const published = await getArticles();
  const featured = published.filter((article) => article.isFeatured);
  if (featured.length >= limit) return featured.slice(0, limit);
  const filler = published.filter((article) => !article.isFeatured);
  return [...featured, ...filler].slice(0, limit);
}

export async function getRelatedArticles(article: Article, limit = 3): Promise<Article[]> {
  const published = await getArticles();
  return published
    .filter((item) => item.id !== article.id)
    .sort((a, b) => {
      const aMatch = a.categoryId === article.categoryId ? 1 : 0;
      const bMatch = b.categoryId === article.categoryId ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export async function getAdjacentArticles(
  article: Article,
): Promise<{ newer: Article | null; older: Article | null }> {
  const published = await getArticles();
  const index = published.findIndex((item) => item.id === article.id);
  return {
    newer: index > 0 ? published[index - 1] : null,
    older: index >= 0 && index < published.length - 1 ? published[index + 1] : null,
  };
}

export async function getProducts(options?: { categoryId?: string }): Promise<Product[]> {
  let result = products.filter((product) => product.status === PUBLISHED);
  if (options?.categoryId) {
    result = result.filter((product) => product.categoryId === options.categoryId);
  }
  return result;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return (
    products.find((product) => product.slug === slug && product.status === PUBLISHED) ?? null
  );
}

export async function getFeaturedProducts(limit = 3): Promise<Product[]> {
  const result = await getProducts();
  return result.slice(0, limit);
}

export async function getCategoryName(categoryId: string | null): Promise<string | null> {
  if (!categoryId) return null;
  const category = categories.find((item) => item.id === categoryId);
  return category?.name ?? null;
}

export async function getStats() {
  const published = articles.filter((article) => article.status === PUBLISHED);
  return {
    articleCount: published.length,
    categoryCount: categories.length,
    productCount: products.filter((product) => product.status === PUBLISHED).length,
  };
}
