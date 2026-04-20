import type { HeroProps } from "../../../types/Hero.types";

const Hero = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) => {
  return (
    <section className="section grid justify-center text-center min-h border">
      <div className="container-custom border">
        
        {/* Headline */}
        <h1 className="mb-6 border">
          <span className="text-gradient">{title}</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 p-2 border">
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