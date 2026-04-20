import { lazy } from "react";
import type { ComponentType } from 'react';
import type { HeroProps } from '../../types/Hero.types';

/**
 * Lazy-loaded sections (performance ready)
 */
const Hero = lazy(() => import("../sections/Hero/Hero"));

/**
 * Registry map
 */
export const componentRegistry: Record<string, ComponentType<HeroProps>> = {
  hero: Hero,
};