import CartSection from "@/components/cards/CartSection";
import Image from "next/image";

import HeroSection from "@/components/sections/HeroSection";
import Section2 from "@/components/sections/Section2";

export default function page() {
  return (
    <div className="bg-[url('/hero2.png')] bg-no-repeat bg-cover bg-fixed ">
      <HeroSection />
      <Section2/>
      {/* <CartSection /> */}
    </div>
  );
}
