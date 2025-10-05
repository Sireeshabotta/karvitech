import React from "react";
import styled from "styled-components";
import { useSpring, config } from "react-spring";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CommitmentSection from "../components/CommitmentSection";
import ContactInfo from '../components/ContactInfo';
import SectorSolutions from '../components/SectorSolutions';



const PageContainer = styled.div`
  width: 100%;
`;

function HomePage() {
  const sectionAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.molasses,
    delay: 600,
  });

  return (
    <PageContainer>
      <Hero />
      <ServicesSection style={sectionAnimation} />
      <WhyChooseUs style={sectionAnimation} />
       <SectorSolutions />
      <ContactInfo />
      <CommitmentSection />
    </PageContainer>
  );
}

export default HomePage;