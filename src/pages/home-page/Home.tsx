import Hero from '../home-page/Components/Hero';
import HowItWorks from '../home-page/Components/HowItWorks';
import ChinaPotential from './Components/ChinaPotential';
import Testimonials from './Components/TestinominalSection';
import WhatWeDo from './Components/WhatWeDo'; 
import WhyChooseUs from './Components/WhyChooseUs';
import Industries from './Components/IndustriesWeServe';

export default function Home() {
  return (
    <div>
      <Hero />
      <ChinaPotential />
      <HowItWorks />
      <WhatWeDo />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
    </div>
  );
}
