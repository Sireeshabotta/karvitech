import React from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Software engineering themed animations (same as Hero.js)
const codeScroll = keyframes`
  0% { transform: translateY(-100vh); opacity: 0; }
  10% { opacity: 0.7; }
  90% { opacity: 0.7; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const terminalBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const dataFlow = keyframes`
  0% { transform: translateX(-100px) scaleX(0); opacity: 0; }
  20% { transform: translateX(-50px) scaleX(0.5); opacity: 0.8; }
  80% { transform: translateX(calc(100vw + 50px)) scaleX(1); opacity: 0.8; }
  100% { transform: translateX(calc(100vw + 100px)) scaleX(0); opacity: 0; }
`;

const apiPulse = keyframes`
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
  }
  50% { 
    transform: scale(1.1) rotate(180deg); 
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.8);
  }
`;

const gitCommitFlow = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  20% { transform: translateX(0); opacity: 1; }
  80% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(20px); opacity: 0; }
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

// Code snippets floating
const CodeSnippet = styled.div`
  position: absolute;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: ${props => props.size || '12px'};
  color: rgba(0, 255, 136, 0.5);
  background: rgba(0, 20, 40, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  border-left: 3px solid rgba(0, 255, 136, 0.3);
  animation: ${codeScroll} ${props => props.duration || '15s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  white-space: nowrap;
  backdrop-filter: blur(2px);
`;

// Terminal cursor
const TerminalCursor = styled.div`
  position: absolute;
  width: 2px;
  height: 14px;
  background: #00ff88;
  animation: ${terminalBlink} 1s infinite;
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
`;

// Data flow lines
const DataFlowLine = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0, 136, 255, 0.6), 
    rgba(0, 255, 136, 0.6),
    rgba(255, 136, 0, 0.6),
    transparent
  );
  animation: ${dataFlow} ${props => props.duration || '8s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  top: ${props => props.top || '50%'};
  width: 150px;
  border-radius: 1px;
`;

// API nodes
const APINode = styled.div`
  position: absolute;
  width: ${props => props.size || '12px'};
  height: ${props => props.size || '12px'};
  background: linear-gradient(45deg, #00ff88, #0088ff);
  border-radius: 3px;
  animation: ${apiPulse} ${props => props.duration || '3s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 4px;
  }
`;

// Git commit visualization
const GitCommit = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6b35;
  border-radius: 50%;
  animation: ${gitCommitFlow} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
  
  &::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 3px;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #ff6b35, transparent);
  }
`;

// Database icon
const DatabaseIcon = styled.div`
  position: absolute;
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '24px'};
  border: 2px solid rgba(0, 255, 136, 0.4);
  border-radius: 4px 4px 8px 8px;
  animation: ${apiPulse} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
  
  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: -2px;
    right: -2px;
    height: 2px;
    background: rgba(0, 255, 136, 0.4);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: -2px;
    right: -2px;
    height: 2px;
    background: rgba(0, 255, 136, 0.4);
  }
`;

// Function brackets
const FunctionBracket = styled.div`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: ${props => props.size || '24px'};
  color: rgba(255, 136, 0, 0.3);
  animation: ${apiPulse} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '0%'};
  top: ${props => props.top || '0%'};
`;

const CommitmentSectionWrapper = styled.section`
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 100px 24px;
  min-height: auto;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.8em;
  text-align: center;
  color: white;
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
  color: rgba(255,255,255,0.85);
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

const CommitmentButton = styled(motion.a)`
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

function CommitmentSection() {
  const codeSnippets = [
    'const partnership = buildTrust();',
    'SELECT future_growth FROM solutions;',
    'git push origin long-term-support',
    'npm audit && npm update',
    'docker-compose up -d',
    'PUT /api/commitment HTTP/1.1',
    'import { Reliability } from "trust";',
    'def ensure_quality():',
    'kubectl scale deployment commitment',
    'const support = await getSupport();',
    'try { deliver(); } catch { resolve(); }',
    'npm run deploy:production',
    'CREATE INDEX ON trust(partnership);',
    'export const commitment = true;',
    'pip install reliability==latest'
  ];

  return (
    <CommitmentSectionWrapper>
      <BackgroundContainer>
        {/* Code snippets flowing */}
        {Array.from({ length: 10 }, (_, i) => (
          <CodeSnippet
            key={`code-${i}`}
            left={`${(i * 10 + Math.random() * 15) % 100}%`}
            delay={`${i * 2.5}s`}
            duration={`${18 + i % 4}s`}
            size={`${9 + i % 3}px`}
          >
            {codeSnippets[i % codeSnippets.length]}
          </CodeSnippet>
        ))}
        
        {/* Terminal cursors */}
        <TerminalCursor left="25%" top="35%" />
        <TerminalCursor left="70%" top="65%" />
        <TerminalCursor left="50%" top="85%" />
        
        {/* Data flow lines */}
        {Array.from({ length: 5 }, (_, i) => (
          <DataFlowLine
            key={`flow-${i}`}
            top={`${20 + i * 20}%`}
            delay={`${i * 1.5}s`}
            duration={`${7 + i % 3}s`}
          />
        ))}
        
        {/* API nodes */}
        <APINode left="20%" top="30%" delay="0s" duration="4s" size="8px" />
        <APINode left="80%" top="40%" delay="1.5s" duration="3.5s" size="10px" />
        <APINode left="65%" top="75%" delay="2.5s" duration="4s" size="9px" />
        <APINode left="35%" top="85%" delay="1s" duration="3.8s" size="7px" />
        <APINode left="15%" top="70%" delay="3.5s" duration="4.2s" size="8px" />
        <APINode left="85%" top="25%" delay="0.8s" duration="3.6s" size="9px" />
        
        {/* Git commits */}
        <GitCommit left="30%" top="50%" delay="0s" />
        <GitCommit left="60%" top="60%" delay="1.2s" />
        <GitCommit left="45%" top="70%" delay="2.4s" />
        
        {/* Database icons */}
        <DatabaseIcon left="90%" top="35%" delay="0s" duration="6s" size="14px" />
        <DatabaseIcon left="10%" top="75%" delay="2.5s" duration="5s" size="16px" />
        <DatabaseIcon left="55%" top="20%" delay="4.5s" duration="5.5s" size="12px" />
        
        {/* Function brackets */}
        <FunctionBracket left="15%" top="45%" delay="0s" duration="9s" size="18px">{'{ }'}</FunctionBracket>
        <FunctionBracket left="80%" top="70%" delay="3s" duration="8s" size="20px">{'[ ]'}</FunctionBracket>
        <FunctionBracket left="40%" top="30%" delay="5s" duration="7s" size="16px">{'< >'}</FunctionBracket>
        <FunctionBracket left="75%" top="90%" delay="2s" duration="10s" size="19px">{'( )'}</FunctionBracket>
      </BackgroundContainer>

      <ContentWrapper>
        <SectionTitle>Our Commitment</SectionTitle>
        <SectionSubtitle>
          Building long-term partnerships by delivering software that supports your current needs and future growth.
        </SectionSubtitle>
        <CommitmentButton
          as={Link} to="/contact"
          whileHover={{ 
            backgroundPosition: "100% 50%", 
            boxShadow: "0 0 20px #ff6f00",
            scale: 1.05 
          }}
          transition={{ duration: 0.3 }}
        >
          Contact Us Today
        </CommitmentButton>
      </ContentWrapper>
    </CommitmentSectionWrapper>
  );
}

export default CommitmentSection;