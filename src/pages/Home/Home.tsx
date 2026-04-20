import { Suspense } from "react";
import homeConfig from "@config/pages/Home/home.json";
import { componentRegistry } from "@components/registry/componentRegistry";

const Home = () => {
  return (
    <div>
      {homeConfig.sections.map((section) => {
        const Component = componentRegistry[section.type];

        if (!Component) {
          console.warn(`Component not found for type: ${section.type}`);
          return null;
        }

        return (
          <Suspense fallback={<div>Loading...</div>} key={section.id}>
            <Component {...section.props} />
          </Suspense>
        );
      })}
    </div>
  );
};

export default Home;