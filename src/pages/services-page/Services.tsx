import ServicesHeroSection from './components/ServicesHeroSection';
import ServiceGrid from './components/DetailedService';
// import StepByStepAudit from './components/StepByStep';


export default function Services() {
  return (
    <div>
      <ServicesHeroSection />
      {/* <StepByStepAudit /> */}
      <ServiceGrid />
    </div>
  );
}
