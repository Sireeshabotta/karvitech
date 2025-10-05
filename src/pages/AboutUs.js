import React from "react";
import styled from "styled-components";
import { FaSeedling, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

const AboutWrapper = styled.div`
  background: #e9edf3;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  text-align: center;
  padding: 100px 20px 80px;
  
  @media (max-width: 768px) {
    padding: 80px 16px 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a237e;
  text-align: center;
  margin: 0 0 50px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 40px;
  }
`;

const StorySection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  margin-bottom: 80px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-bottom: 60px;
  }
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FoundersSection = styled.div`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const FounderCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FounderImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e, #3f51b5);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 600;
`;

const FounderName = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin: 0 0 10px;
  font-weight: 600;
`;

const FounderTitle = styled.p`
  font-size: 1rem;
  color: #ff6f00;
  margin: 0 0 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FounderBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  text-align: justify;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #ff6f00, #ff8f00);
  color: white;
  padding: 60px 20px;
  margin: 80px -20px;
  
  @media (max-width: 768px) {
    margin: 60px -16px;
    padding: 50px 16px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    margin: 0 0 10px;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.9;
  }
`;

const ValuesSection = styled.div`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e, #3f51b5);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a237e;
  margin: 0 0 15px;
  font-weight: 600;
`;

const ValueDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
`;

const LocationSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const LocationTitle = styled.h3`
  font-size: 2rem;
  color: #1a237e;
  margin: 0 0 20px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LocationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

function AboutUs() {
  return (
    <AboutWrapper>
      <HeroSection>
        <HeroTitle>About Karvitech Software Solutions</HeroTitle>
        <HeroSubtitle>
          Empowering businesses with innovative software solutions, 
          from small shops to enterprise-level companies
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <StorySection>
          <SectionTitle>Our Story</SectionTitle>
          <StoryText>
            At Karvitech Software Solutions, we believe that technology should simplify life and empower businesses 
            to reach their full potential. Founded with a vision to bridge the gap between complex technology 
            and practical business needs, we have established ourselves as a trusted partner for companies 
            ranging from small local shops to large enterprises.
          </StoryText>
          <StoryText>
            Our journey began with a simple yet powerful idea: to provide affordable, high-quality software 
            solutions that are accessible to businesses of all sizes. We understand that every business is 
            unique, and we pride ourselves on delivering completely flexible solutions that adapt to our 
            customers' specific needs and requirements.
          </StoryText>
          <StoryText>
            From mobile applications to standalone software systems, web development to electronics software 
            integration, we provide comprehensive solutions that cover the entire spectrum of digital needs. 
            Our commitment to excellence and customer satisfaction drives us to continuously innovate and 
            deliver solutions that not only meet but exceed expectations.
          </StoryText>
        </StorySection>

        <FoundersSection>
          <SectionTitle>Meet Our Founders</SectionTitle>
          <FoundersGrid>
            <FounderCard>
              <FounderImage>RT</FounderImage>
              <FounderName>Ravi Teja Peramakonda</FounderName>
              <FounderTitle>Founder & CEO</FounderTitle>
              <FounderBio>
                A visionary leader with a deep passion for software development and innovation. 
                Ravi Teja brings extensive experience in creating scalable solutions and has a 
                remarkable ability to understand complex business requirements and translate them 
                into elegant software solutions. His commitment to excellence and customer satisfaction 
                has been instrumental in establishing our reputation in the industry.
              </FounderBio>
            </FounderCard>
            
            <FounderCard>
              <FounderImage>KT</FounderImage>
              <FounderName>Karthik Thodeti</FounderName>
              <FounderTitle>Founder & Director</FounderTitle>
              <FounderBio>
                An expert in electronics and software integration with a passion for creating 
                systems that make life simpler. Karthik specializes in developing innovative 
                solutions that seamlessly blend hardware and software components. His technical 
                expertise and forward-thinking approach ensure that our solutions are not only 
                current but also future-ready, positioning our clients for long-term success.
              </FounderBio>
            </FounderCard>
          </FoundersGrid>
        </FoundersSection>

<StatsSection>
  <SectionTitle style={{ color: "white", marginBottom: "40px" }}>
    Our Journey & Vision
  </SectionTitle>
  <StatsGrid>
    <StatItem>
      <FaSeedling />
      <h2>Growing Strong</h2>
      <p>Building a foundation of quality and trust from day one</p>
    </StatItem>
    <StatItem>
      <FaUsers />
      <h2>Dedicated Team</h2>
      <p>Passionate professionals committed to your success</p>
    </StatItem>
    <StatItem>
      <FaLightbulb />
      <h2>Innovative Ideas</h2>
      <p>Fresh solutions tailored to your unique business needs</p>
    </StatItem>
    <StatItem>
      <FaGlobe />
      <h2>Global Vision</h2>
      <p>Ready to serve clients locally and worldwide</p>
    </StatItem>
  </StatsGrid>
</StatsSection>

        <ValuesSection>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>💡</ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We constantly explore new technologies and methodologies to deliver 
                cutting-edge solutions that keep our clients ahead of the curve.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Customer Focus</ValueTitle>
              <ValueDescription>
                Our clients' success is our success. We provide complete flexibility 
                and personalized attention to meet every customer's unique needs.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>⚡</ValueIcon>
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We strive to deliver the best potential solutions in everything we do, 
                maintaining the highest standards of quality and performance.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>💰</ValueIcon>
              <ValueTitle>Affordability</ValueTitle>
              <ValueDescription>
                Quality software solutions shouldn't break the bank. We offer 
                competitive pricing that makes technology accessible to all businesses.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌍</ValueIcon>
              <ValueTitle>Global Reach</ValueTitle>
              <ValueDescription>
                With experience serving clients from different countries, we bring 
                international standards and diverse perspectives to every project.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🔧</ValueIcon>
              <ValueTitle>Comprehensive Solutions</ValueTitle>
              <ValueDescription>
                From mobile apps to standalone systems, we provide end-to-end solutions 
                that cover all aspects of your digital transformation journey.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <LocationSection>
          <LocationTitle>🏢 Based in Nellore, Andhra Pradesh - INDIA</LocationTitle>
          <LocationText>
            Proudly serving clients from our home base in Nellore, Andhra Pradesh, India. 
            Our strategic location allows us to combine local understanding with global expertise, 
            providing personalized service while maintaining competitive pricing. We're committed 
            to contributing to the growth of the local tech ecosystem while serving clients 
            worldwide with the same level of dedication and excellence.
          </LocationText>
        </LocationSection>
      </ContentSection>
    </AboutWrapper>
  );
}

export default AboutUs;