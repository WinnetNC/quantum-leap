import { Suspense } from "react";
import homeConfig from "@config/pages/Home/home.json";
import { componentRegistry } from "../../components/registry/componentRegistry";
import type { PageConfig } from "../../types/ui.types";

const typedConfig = homeConfig as PageConfig;

const Home = () => {
  return (
    <div>
      {typedConfig.sections.map((section) => {
        if (section.type === "hero") {
          const HeroComponent = componentRegistry.hero;

          return (
            <Suspense fallback={<div>Loading...</div>} key={section.id}>
              <HeroComponent {...section.props} />
            </Suspense>
          );
        }

        if (section.type === "features") {
          const FeaturesComponent = componentRegistry.features;

          return (
            <Suspense fallback={<div>Loading...</div>} key={section.id}>
              <FeaturesComponent {...section.props} />
            </Suspense>
          );
        }

        if (section.type === "howItWorks") {
          const HowItWorksComponent = componentRegistry.howItWorks;

          return (
            <Suspense fallback={<div>Loading...</div>} key={section.id}>
              <HowItWorksComponent {...section.props} />
            </Suspense>
          );
        }

        if (section.type === "faq") {
          const FAQComponent = componentRegistry.faq;

          return (
            <Suspense fallback={<div>Loading...</div>} key={section.id}>
              <FAQComponent {...section.props} />
            </Suspense>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Home;