import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaDollarSign, FaUsers, FaCogs, FaShieldAlt } from "react-icons/fa";

const Section = styled(motion.section)`
  padding: 100px 24px;
  background: #f7f9fc;
  color: #2e3440;
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.8em;
  text-align: center;
  color: #2e3440;
  font-weight: 700;
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.6em;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

const SectionSubtitle = styled.p`
  max-width: 720px;
  margin: 0 auto 3em auto;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #555;
  line-height: 1.6;
  opacity: 0.85;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2em;
    line-height: 1.5;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5em;
  }
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 36px 30px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.07);
  text-align: center;
  border: 2px solid transparent;
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.12);
    border-color: #5e4b8b;
  }

  @media (max-width: 768px) {
    padding: 28px 24px;
    border-radius: 16px;
    &:hover {
      transform: translateY(-4px);
    }
  }
  @media (max-width: 480px) {
    padding: 24px 20px;
    border-radius: 12px;
  }
`;

const IconWrapper = styled.div`
  margin: 0 auto 20px auto;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #5e4b8b, #7e6ba3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.8rem;
  box-shadow: 0 8px 20px rgba(94, 75, 139, 0.3);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2.4rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #5e4b8b;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const FeatureDescription = styled.p`
  font-weight: 400;
  line-height: 1.7;
  color: #444;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

function WhyChooseUs({ style }) {
  const features = [
    {
      icon: <FaRocket />,
      title: "Fast & Reliable Support",
      description: "Dedicated team ensuring minimal downtime and quick issue resolution to keep your business running smoothly.",
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable Pricing",
      description: "Competitive pricing models tailored to your budget without compromising on quality.",
    },
    {
      icon: <FaCogs />,
      title: "Flexible & Scalable",
      description: "Easily add new features or scale your existing applications as your business grows.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Centric Approach",
      description: "Close collaboration to align software solutions perfectly with your vision and goals.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      description: "We prioritize your data security and ensure compliance with industry standards and best practices.",
    },
  ];

  return (
    <Section style={style} aria-labelledby="why-choose-title">
      <SectionTitle id="why-choose-title">Why Choose Karvitech Software Solutions?</SectionTitle>
      <SectionSubtitle>
        We are committed to providing flexible, scalable, and affordable software solutions with
        fast and reliable support.
      </SectionSubtitle>

      <FeaturesGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Features list"
      >
        {features.map((feature, i) => (
          <FeatureCard key={i} variants={cardVariants} aria-labelledby={`feature-title-${i}`}>
            <IconWrapper aria-hidden="true">{feature.icon}</IconWrapper>
            <FeatureTitle id={`feature-title-${i}`}>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Section>
  );
}

export default WhyChooseUs;