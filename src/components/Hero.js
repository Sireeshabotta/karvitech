import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

// Enhanced animations for computing graphics
const dataStream = keyframes`
  0% { transform: translateX(-100vw) translateY(0px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(100vw) translateY(-20px); opacity: 0; }
`;

const circuitPulse = keyframes`
  0%, 100% { 
    opacity: 0.3; 
    transform: scale(1) rotate(0deg);
    filter: brightness(1);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.05) rotate(180deg);
    filter: brightness(1.5);
  }
`;

const hexagonSpin = keyframes`
  0% { transform: rotate(0deg) scale(1); opacity: 0.2; }
  25% { transform: rotate(90deg) scale(1.1); opacity: 0.6; }
  50% { transform: rotate(180deg) scale(1); opacity: 0.4; }
  75% { transform: rotate(270deg) scale(0.9); opacity: 0.7; }
  100% { transform: rotate(360deg) scale(1); opacity: 0.2; }
`;

const glitchEffect = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

// Data streams (horizontal moving elements)
const DataStreamElement = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff88, #0088ff, transparent);
  animation: ${dataStream} ${props => props.duration || '12s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  top: ${props => props.top || '50%'};
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
`;

// Circuit nodes
const CircuitNode = styled.div`
  position: absolute;
  width: ${props => props.size || '8px'};
  height: ${props => props.size || '8px'};
  background: radial-gradient(circle, #00ff88, #0088ff);
  border-radius: 50%;
  animation: ${circuitPulse} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
`;

// Hexagonal tech elements
const HexagonElement = styled.div`
  position: absolute;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 2px solid rgba(0, 255, 136, 0.3);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: ${hexagonSpin} ${props => props.duration || '8s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
`;

const GridLine = styled.div`
  position: absolute;
  background: linear-gradient(${props => props.direction || '0deg'}, 
    transparent, 
    rgba(0, 255, 136, 0.1), 
    transparent
  );
  ${props => props.horizontal ? css`
    width: 100%;
    height: 1px;
    top: ${props.position};
    animation: ${glitchEffect} 6s ease-in-out infinite;
  ` : css`
    width: 1px;
    height: 100%;
    left: ${props.position};
    animation: ${glitchEffect} 8s ease-in-out infinite;
  `}
  animation-delay: ${props => props.delay || '0s'};
`;


// Binary data blocks
const DataBlock = styled.div`
  position: absolute;
  width: ${props => props.width || '60px'};
  height: ${props => props.height || '20px'};
  background: linear-gradient(45deg, rgba(0, 136, 255, 0.2), rgba(0, 255, 136, 0.2));
  border: 1px solid rgba(0, 255, 136, 0.3);
  animation: ${circuitPulse} ${props => props.duration || '5s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
  backdrop-filter: blur(1px);
`;

const HeroSection = styled(animated.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 40px 16px;
  }
`;

const FloatingContainer = styled(animated.div)`
  will-change: transform;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.0rem;
  margin-bottom: 0.5em;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  user-select: none;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.8em;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.6rem;
  margin-bottom: 2.5em;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.85;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2em;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5em;
  }
`;

const FancyButton = styled(motion.a)`
  background: #ff6f00;
  padding: 18px 56px;
  font-weight: 700;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.7);
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 0.05em;
  border: none;
  outline: none;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  text-decoration: none;
  
  &:hover,
  &:focus {
    background-color: #e65100;
    box-shadow: 0 10px 30px rgba(255, 111, 0, 0.9);
    outline: none;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

function Hero() {
  const floating = useSpring({
    loop: { reverse: true },
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-12px)" },
    config: { duration: 3000 },
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <BackgroundContainer>
        {/* Data streams */}
        {Array.from({ length: 8 }, (_, i) => (
          <DataStreamElement
            key={`stream-${i}`}
            top={`${15 + i * 12}%`}
            delay={`${i * 1.5}s`}
            duration={`${10 + i % 4}s`}
          />
        ))}
        
        {/* Circuit nodes */}
        <CircuitNode left="15%" top="25%" delay="0s" duration="3s" size="6px" />
        <CircuitNode left="85%" top="20%" delay="1s" duration="4s" size="8px" />
        <CircuitNode left="70%" top="75%" delay="2s" duration="3.5s" size="10px" />
        <CircuitNode left="25%" top="80%" delay="1.5s" duration="4.5s" size="7px" />
        <CircuitNode left="50%" top="15%" delay="3s" duration="3s" size="9px" />
        <CircuitNode left="90%" top="60%" delay="0.5s" duration="4s" size="6px" />
        <CircuitNode left="10%" top="90%" delay="2.5s" duration="3.5s" size="8px" />
        <CircuitNode left="60%" top="85%" delay="1.8s" duration="4.2s" size="7px" />
        
        {/* Hexagonal elements */}
        <HexagonElement left="20%" top="40%" delay="0s" duration="12s" size="35px" />
        <HexagonElement left="75%" top="30%" delay="2s" duration="15s" size="25px" />
        <HexagonElement left="30%" top="70%" delay="4s" duration="10s" size="30px" />
        <HexagonElement left="80%" top="80%" delay="1s" duration="14s" size="20px" />
        <HexagonElement left="5%" top="60%" delay="3s" duration="11s" size="28px" />
        
        {/* Grid lines */}
        <GridLine horizontal position="20%" delay="0s" />
        <GridLine horizontal position="60%" delay="2s" />
        <GridLine horizontal position="85%" delay="4s" />
        <GridLine position="25%" delay="1s" />
        <GridLine position="75%" delay="3s" />
        
        {/* Data blocks */}
        <DataBlock left="40%" top="35%" delay="0s" duration="6s" width="80px" height="15px" />
        <DataBlock left="65%" top="50%" delay="2s" duration="7s" width="60px" height="20px" />
        <DataBlock left="15%" top="55%" delay="4s" duration="5s" width="70px" height="18px" />
        <DataBlock left="85%" top="40%" delay="1s" duration="6.5s" width="50px" height="16px" />
      </BackgroundContainer>

      <FloatingContainer style={floating}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <HeroTitle variants={itemVariants}>Karvitech Software Solutions</HeroTitle>
          <HeroSubtitle variants={itemVariants}>
            Delivering innovative software applications with fast support and affordable pricing,
            tailored for clients in India and worldwide.
          </HeroSubtitle>
          <FancyButton
            as={motion.button}
            onClick={scrollToServices}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(255, 111, 0, 0.9)",
              backgroundColor: "#e65100",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            Explore Our Services
          </FancyButton>
        </motion.div>
      </FloatingContainer>
    </HeroSection>
  );
}

export default Hero;