

import Client from "./_components/Client";
import FAQs from "./_components/FAQs";
import Hero from "./_components/Hero";
import Offer from "./_components/Offer";


export default function Home() {
  return (
    <div>
     <Hero/>
     
     <Offer/>
     <Client/>
     <FAQs/>
     {/* <Content/> */}
    </div>
  );
}
