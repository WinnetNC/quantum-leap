import { useState } from "react";
import type { HowItWorksProps } from "../../../types/ui.types";

const HowItWorks = ({ title, steps }: HowItWorksProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section">
      <div className="container-custom">

        <h2 className="section-title text-center">{title}</h2>

        {/* Step Indicators */}
        <div className="flex justify-center gap-4 mb-8">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`px-4 py-2 rounded-lg border transition ${
                activeStep === index
                  ? "bg-cyan-400 text-black"
                  : "border-gray-600"
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Step */}
        <div className="card text-center max-w-xl mx-auto">
          <h3 className="mb-4">{steps[activeStep].title}</h3>
          <p>{steps[activeStep].description}</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;