import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animated } from "react-spring";
import { motion } from "framer-motion";

const Section = styled(animated.section)`
  padding: 100px 24px;
  background: white;
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

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 36px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 36px 30px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.07);
  will-change: transform, box-shadow;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
  
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

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px auto;
  background: linear-gradient(45deg, #5e4b8b, #7e6ba3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 8px 20px rgba(94, 75, 139, 0.3);
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 16px 0;
  color: #5e4b8b;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const CardText = styled.p`
  font-weight: 400;
  line-height: 1.7;
  color: #444;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  
  &:before {
    content: "✓";
    color: #4caf50;
    font-weight: bold;
    margin-right: 8px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff6f00, #ff8f00);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 111, 0, 0.4);
    color: white;
  }
  

  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 10px 20px;
  }
`;

const ComingSoonButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #666, #888);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: 0 6px 20px rgba(102, 102, 102, 0.3);
  
  &:before {
    content: "⏳";
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 10px 20px;
  }
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

function ServicesSection({ style }) {
  const services = [
    {
      title: "Custom Web Applications",
      icon: "🌐",
      text: "Responsive, user-friendly web apps optimized for desktop and mobile devices with modern design and cutting-edge technology.",
      features: [
        "Responsive design for all screen sizes",
        "Modern UI/UX with intuitive navigation",
        "Fast loading speeds and performance optimization",
        "Cross-browser compatibility",
        "Database integration and management"
      ],
      route: "/web-development",
      buttonText: "Get Custom Quote"
    },
    {
      title: "Business Email Solutions",
      icon: "📧",
      text: "Professional and secure email services tailored for your business communication with advanced security and reliability.",
      features: [
        "Custom domain email addresses",
        "Advanced spam and virus protection",
        "Calendar and contact synchronization",
        "Mobile device compatibility",
        "Large storage capacity"
      ],
      route: "/business-email",
      buttonText: "Setup My Email"
    },
    {
      title: "Mobile Applications",
      icon: "📱",
      text: "Native and cross-platform apps delivering seamless user experiences on all devices with modern features and functionality.",
      features: [
        "iOS and Android development",
        "Cross-platform compatibility",
        "Push notifications and alerts",
        "Offline functionality",
        "App store optimization"
      ],
      route: "/mobile-apps",
      buttonText: "Build My App"
    },
    {
      title: "Standalone Software",
      icon: "💻",
      text: "Custom-built applications designed specifically to meet your unique business needs with scalable architecture and professional support.",
      features: [
        "Custom software development",
        "Desktop application development",
        "Database design and optimization",
        "Inventory management systems",
        "CRM and ERP solutions"
      ],
      route: null, // No route yet
      buttonText: "Coming Soon"
    },
  ];

  return (
    <Section id="services" style={style}>
      <SectionTitle>Our Services</SectionTitle>
      <SectionSubtitle>
        We create a wide range of professional software solutions customized to your business needs. 
        Each service comes with comprehensive features, ongoing support, and competitive pricing.
      </SectionSubtitle>
      <ServicesGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Services list"
      >
        {services.map((service, i) => (
          <Card
            key={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            aria-labelledby={`card-title-${i}`}
          >
            <IconContainer>
              {service.icon}
            </IconContainer>
            
            <CardTitle id={`card-title-${i}`}>{service.title}</CardTitle>
            
            <CardText>{service.text}</CardText>

            <FeaturesList>
              {service.features.map((feature, idx) => (
                <FeatureItem key={idx}>{feature}</FeatureItem>
              ))}
            </FeaturesList>

            {service.route ? (
              <ActionButton to={service.route}>
                {service.buttonText}
              </ActionButton>
            ) : (
              <ComingSoonButton>
                {service.buttonText}
              </ComingSoonButton>
            )}
          </Card>
        ))}
      </ServicesGrid>
    </Section>
  );
}

export default ServicesSection;