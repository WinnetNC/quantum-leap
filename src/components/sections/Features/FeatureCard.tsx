import type { Feature } from "../../../types/ui.types"; 

const FeatureCard = ({ title, description, icon }: Feature) => { 
  return ( 
    <div className=" card card-hover cursor-pointer transition-all duration-300 hover:scale-105 " > 
      <div className="text-3xl mb-4">{icon}</div> 
      <h3 className="mb-2 text-gradient">{title}</h3> 
      <p>{description}</p> 
    </div> 
  ); }; 
  export default FeatureCard;