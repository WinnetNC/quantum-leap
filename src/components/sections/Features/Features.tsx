import FeatureCard from "./FeatureCard";
import type{ FeaturesProps } from "../../../types/ui.types";

const Features = ({ title, features }: FeaturesProps) => {
  return (
    <section className="section min-h-screen">
      <div className="container-custom">

        <h2 className="section-title text-center">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;