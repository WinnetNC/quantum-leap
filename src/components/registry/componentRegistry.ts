import { lazy } from "react";

// Lazy-loaded sections (performance ready)
const Hero = lazy(() => import("../sections/Hero/Hero"));
const Features = lazy(() => import("../sections/Features/Features"));
const HowItWorks = lazy(() => import("../sections/HowItWorks/HowItWorks"));
const FAQ = lazy(() => import("../sections/FAQ/FAQ"));

// Registry Map
export const componentRegistry = {
  hero: Hero,
  features: Features,
  howItWorks: HowItWorks,
  faq: FAQ,
};