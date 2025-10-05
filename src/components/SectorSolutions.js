import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const SectorSolutionsSection = styled.section`
  padding: 100px 24px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 968px) {
    height: auto;
    min-height: 500px;
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 450px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    height: auto;
    min-height: 400px;
    border-radius: 12px;
  }
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
              url(${props => props.bgImage}) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 968px) {
    position: relative;
    height: auto;
    min-height: 500px;
  }
  
  @media (max-width: 768px) {
    min-height: 450px;
    padding: 1rem 0;
  }
  
  @media (max-width: 480px) {
    min-height: 400px;
  }
`;

const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

const SlideIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const SlideTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 0.8rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const FeatureItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const FeatureIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-right: 0.3rem;
  }
`;

const FeatureText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const MockupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
  }
`;

const PhoneMockup = styled.div`
  width: 250px;
  height: 400px;
  background: #1a1a1a;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 320px;
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    height: 280px;
    padding: 12px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 1rem;
  color: white;
  font-size: 0.8rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.6rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    margin-top: 1.5rem;
    gap: 0.5rem;
  }
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 1rem;
  }
`;

const DotsIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    margin: 0 0.5rem;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

// Updated mockup content with better mobile formatting
const sectors = [
  {
    id: 1,
    title: "Restaurant Solutions",
    icon: "🍽️",
    description: "Complete restaurant management system with digital menu, online ordering, and customer engagement tools.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      { icon: "📱", text: "Digital Menu Display" },
      { icon: "🛒", text: "Online Ordering System" },
      { icon: "📅", text: "Table Reservation" },
      { icon: "💳", text: "Payment Integration" },
      { icon: "📊", text: "Sales Analytics" },
      { icon: "⭐", text: "Customer Reviews" }
    ],
    mockupContent: (
      <div>
        <div style={{ 
          background: '#ff6b35', 
          padding: '6px', 
          borderRadius: '6px', 
          marginBottom: '8px', 
          textAlign: 'center', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.6rem, 2vw, 0.8rem)'
        }}>
          Karvi Restaurant
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🍕 Margherita Pizza - ₹299
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🍔 Cheese Burger - ₹199
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🍜 Pasta Alfredo - ₹249
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '6px',
          fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)'
        }}>
          📅 Book Table: Today 7:30 PM
        </div>
        <div style={{ 
          background: '#4CAF50', 
          padding: '4px', 
          borderRadius: '4px', 
          textAlign: 'center', 
          fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)'
        }}>
          Order Now - Total: ₹747
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Real Estate Solutions",
    icon: "🏢",
    description: "Comprehensive real estate platform for property listings, virtual tours, and client management.",
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    features: [
      { icon: "🏠", text: "Property Listings" },
      { icon: "🗺️", text: "Interactive Maps" },
      { icon: "📷", text: "Virtual Tours" },
      { icon: "💰", text: "Price Calculator" },
      { icon: "📞", text: "Agent Contact" },
      { icon: "📈", text: "Market Analytics" }
    ],
    mockupContent: (
      <div>
        <div style={{ 
          background: '#2196F3', 
          padding: '6px', 
          borderRadius: '6px', 
          marginBottom: '8px', 
          textAlign: 'center', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.6rem, 2vw, 0.8rem)'
        }}>
          Karvi Properties
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🏠 3BHK Villa - ₹85 Lakhs
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🏢 2BHK Apartment - ₹45 Lakhs
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          📍 Electronic City, Nellore
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '6px',
          fontSize: 'clamp(0.4rem, 1.2vw, 0.6rem)'
        }}>
          🗺️ View on Map | 📷 Virtual Tour
        </div>
        <div style={{ 
          background: '#FF9800', 
          padding: '4px', 
          borderRadius: '4px', 
          textAlign: 'center', 
          fontSize: 'clamp(0.4rem, 1.2vw, 0.6rem)'
        }}>
          Contact Agent: +91 99024 68711
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Healthcare Solutions",
    icon: "🏥",
    description: "Modern healthcare management system for appointments, patient records, and telemedicine services.",
    bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      { icon: "📅", text: "Appointment Booking" },
      { icon: "👨‍⚕️", text: "Doctor Profiles" },
      { icon: "📋", text: "Medical Records" },
      { icon: "💊", text: "Prescription Management" },
      { icon: "📱", text: "Telemedicine" },
      { icon: "🔔", text: "Appointment Reminders" }
    ],
    mockupContent: (
      <div>
        <div style={{ 
          background: '#4CAF50', 
          padding: '6px', 
          borderRadius: '6px', 
          marginBottom: '8px', 
          textAlign: 'center', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.6rem, 2vw, 0.8rem)'
        }}>
          Karvi Healthcare
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          👨‍⚕️ Dr. Rajesh Kumar - Cardiologist
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          🕐 Available: 9:00 AM - 5:00 PM
        </div>
        <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', marginBottom: '6px', padding: '2px' }}>
          📅 Next Available: Tomorrow 2:30 PM
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '6px',
          fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)'
        }}>
          📋 View Medical History
        </div>
        <div style={{ 
          background: '#2196F3', 
          padding: '4px', 
          borderRadius: '4px', 
          textAlign: 'center', 
          fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)'
        }}>
          Book Appointment
        </div>
      </div>
    )
  }
];

function SectorSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sectors.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  return (
    <SectorSolutionsSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>
            Sector-Specific Solutions
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Tailored software solutions designed for specific industries, addressing unique challenges and requirements.
          </SectionSubtitle>

          <motion.div variants={itemVariants}>
            <SliderWrapper>
              <AnimatePresence mode="wait">
                <Slide
                  key={currentSlide}
                  bgImage={sectors[currentSlide].bgImage}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                >
                  <SlideContent>
                    <SlideInfo>
                      <SlideIcon>{sectors[currentSlide].icon}</SlideIcon>
                      <SlideTitle>{sectors[currentSlide].title}</SlideTitle>
                      <SlideDescription>{sectors[currentSlide].description}</SlideDescription>
                      <FeaturesList>
                        {sectors[currentSlide].features.map((feature, index) => (
                          <FeatureItem key={index} delay={`${index * 0.1}s`}>
                            <FeatureIcon>{feature.icon}</FeatureIcon>
                            <FeatureText>{feature.text}</FeatureText>
                          </FeatureItem>
                        ))}
                      </FeaturesList>
                    </SlideInfo>
                    <MockupContainer>
                      <PhoneMockup>
                        <PhoneScreen>
                          {sectors[currentSlide].mockupContent}
                        </PhoneScreen>
                      </PhoneMockup>
                    </MockupContainer>
                  </SlideContent>
                </Slide>
              </AnimatePresence>
            </SliderWrapper>

            <Navigation>
              <NavButton onClick={prevSlide}>❮</NavButton>
              <DotsIndicator>
                {sectors.map((_, index) => (
                  <Dot
                    key={index}
                    active={index === currentSlide}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </DotsIndicator>
              <NavButton onClick={nextSlide}>❯</NavButton>
            </Navigation>
          </motion.div>
        </motion.div>
      </Container>
    </SectorSolutionsSection>
  );
}

export default SectorSolutions;