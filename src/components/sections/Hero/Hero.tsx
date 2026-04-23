import type { HeroProps } from "../../../types/ui.types";

const Hero = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) => {
  return (
    <section className="section flex items-center justify-center text-center min-h-screen">
      <div className="container-custom">
        
        {/* Headline */}
        <h1 className="mb-6">
          <span className="text-gradient">{title}</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary">
            {primaryCTA.label}
          </button>

          <button className="btn btn-secondary">
            {secondaryCTA.label}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;