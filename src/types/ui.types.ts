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

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title: string;
  items: FAQItem[];
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
    }
  | {
      id: string;
      type: "howItWorks";
      props: HowItWorksProps;
    }
  | {
      id: string;
      type: "faq";
      props: FAQProps;
    };

export interface PageConfig {
  page: string;
  sections: SectionConfig[];
}