export interface CTA {
  label: string;
  action: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesProps {
  title: string;
  features: Feature[];
}

export type SectionConfig =
  | {
      id: string;
      type: "hero";
      props: HeroProps;
    }
  | {
      id: string;
      type: "features";
      props: FeaturesProps;
    };

export interface PageConfig {
  page: string;
  sections: SectionConfig[];
}