import React, { FC } from "react";
import HeaderSection from "./header";
import HeroSection from "./hero";
import FooterSection from "./footer";

const HomePage: FC = ({}) => {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <FooterSection />
    </>
  );
};
export default HomePage;
