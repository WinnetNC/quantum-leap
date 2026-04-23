import { lazy } from "react";

// Lazy-loaded sections (performance ready)
const Hero = lazy(() => import("../sections/Hero/Hero"));
const Features = lazy(() => import("../sections/Features/Features"));

// Registry Map
export const componentRegistry = {
  hero: Hero,
  features: Features,
};