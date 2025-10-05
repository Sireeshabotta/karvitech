import React from "react";
import styled from "styled-components";
import womenLaptop from '../assets/womenlaptop.png';
import websiteTemplate from '../assets/website.png';
import { Link } from "react-router-dom";

const WebDevWrapper = styled.div`
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
  font-size: 3.5rem;
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
  max-width: 700px;
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

const IntroSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  margin-bottom: 80px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 30px 20px;
    margin-bottom: 60px;
  }
`;

const IntroText = styled.div`
  h3 {
    font-size: 2rem;
    color: #1a237e;
    margin: 0 0 20px;
    font-weight: 600;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const IntroImage = styled.div`
  width: 300px;
  height: 250px;
  background-image: url(${womenLaptop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  
  @media (max-width: 968px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 80px 0;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6f00, #ff8f00);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a237e;
  margin: 0 0 15px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  text-align: justify;
`;

const TechSection = styled.div`
  background: linear-gradient(135deg, #1a237e, #3f51b5);
  color: white;
  padding: 60px 20px;
  margin: 80px -20px;
  border-radius: 20px;
  
  @media (max-width: 768px) {
    margin: 60px -16px;
    padding: 50px 16px;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
`;

const TechItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  
  .icon {
    font-size: 3rem;
    margin-bottom: 10px;
    display: block;
  }
  
  .name {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const ProcessSection = styled.div`
  margin: 80px 0;
  
  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProcessStep = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  position: relative;
  
  &::before {
    content: '${props => props.step}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6f00;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a237e;
  margin: 20px 0 15px;
  font-weight: 600;
`;

const ProcessDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
`;

const ShowcaseSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  margin: 80px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 60px 0;
  }
`;

const ShowcaseImage = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-image: url(${websiteTemplate});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: 30px auto 0;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ShowcaseText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  text-align: justify;
`;

const PricingSection = styled.div`
  background: linear-gradient(135deg, #ff6f00, #ff8f00);
  color: white;
  padding: 60px 20px;
  margin: 80px -20px;
  border-radius: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    margin: 60px -16px;
    padding: 50px 16px;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const PricingCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  
  h3 {
    font-size: 1.5rem;
    margin: 0 0 15px;
    font-weight: 600;
  }
  
  .price {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 8px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const CTASection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #ff6f00;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(255, 111, 0, 0.7);
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background: #e65100;
    box-shadow: 0 10px 30px rgba(255, 111, 0, 0.9);
    transform: translateY(-2px);
  }
`;

function WebDevelopment() {
  return (
    <WebDevWrapper>
      <HeroSection>
        <HeroTitle>🚀 Web Development Services</HeroTitle>
        <HeroSubtitle>
          Transform your business with cutting-edge websites that drive growth, 
          engage customers, and deliver exceptional user experiences
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroSection>
          <IntroText>
            <h3>Crafting Digital Excellence</h3>
            <p>
              At Karvitech Software Solutions, we understand that your website is often the first 
              interaction customers have with your business. That's why we specialize in creating 
              stunning, functional, and user-friendly websites that not only look amazing but also 
              drive real business results.
            </p>
            <p>
              Our team of experienced developers and designers work closely with you to understand 
              your unique business needs, target audience, and goals. We then craft custom web 
              solutions that perfectly align with your vision while incorporating the latest 
              technologies and best practices in web development.
            </p>
            <p>
              From small business websites to complex enterprise applications, we have the expertise 
              and passion to bring your digital dreams to life. Every project we undertake is treated 
              with the same level of dedication and attention to detail, ensuring exceptional results 
              regardless of size or complexity.
            </p>
          </IntroText>
          <IntroImage />
        </IntroSection>

        <SectionTitle>Our Web Development Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🎨</ServiceIcon>
            <ServiceTitle>Custom Website Design</ServiceTitle>
            <ServiceDescription>
              Create unique, visually stunning websites tailored to your brand identity. 
              Our designers craft beautiful, modern interfaces that captivate visitors and 
              reflect your business personality. From color schemes to typography, every 
              element is carefully chosen to create a cohesive and memorable user experience.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceTitle>Responsive Development</ServiceTitle>
            <ServiceDescription>
              Ensure your website looks perfect on all devices - desktop, tablet, and mobile. 
              Our responsive designs automatically adapt to different screen sizes, providing 
              optimal viewing experiences across all platforms. This approach significantly 
              improves user engagement and search engine rankings.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🛒</ServiceIcon>
            <ServiceTitle>E-Commerce Solutions</ServiceTitle>
            <ServiceDescription>
              Build powerful online stores that drive sales and grow your business. We develop 
              secure, feature-rich e-commerce platforms with payment gateways, inventory management, 
              order tracking, and customer management systems. From small boutiques to large 
              marketplaces, we have the expertise to deliver.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>⚡</ServiceIcon>
            <ServiceTitle>Performance Optimization</ServiceTitle>
            <ServiceDescription>
              Lightning-fast loading speeds that keep visitors engaged and improve search rankings. 
              We optimize every aspect of your website - from image compression to code minification, 
              database optimization to content delivery networks. Fast websites convert better 
              and provide superior user experiences.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔒</ServiceIcon>
            <ServiceTitle>Security & Maintenance</ServiceTitle>
            <ServiceDescription>
              Protect your website with robust security measures and ongoing maintenance support. 
              We implement SSL certificates, regular security updates, backup systems, and 
              monitoring tools to keep your website secure and running smoothly. Our maintenance 
              packages ensure your site stays current and protected.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📈</ServiceIcon>
            <ServiceTitle>SEO Integration</ServiceTitle>
            <ServiceDescription>
              Build websites optimized for search engines from the ground up. We implement 
              proper site structure, meta tags, schema markup, and technical SEO best practices 
              to help your website rank higher in search results and attract more organic traffic. 
              Better visibility means more customers.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        <TechSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Technologies We Master
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
            We stay current with the latest web technologies to deliver modern, efficient, and scalable solutions
          </p>
          <TechGrid>
            <TechItem>
              <span className="icon">⚛️</span>
              <span className="name">React</span>
            </TechItem>
            <TechItem>
              <span className="icon">🟨</span>
              <span className="name">JavaScript</span>
            </TechItem>
            <TechItem>
              <span className="icon">🎨</span>
              <span className="name">CSS3</span>
            </TechItem>
            <TechItem>
              <span className="icon">📝</span>
              <span className="name">HTML5</span>
            </TechItem>
            <TechItem>
              <span className="icon">🟢</span>
              <span className="name">Node.js</span>
            </TechItem>
            <TechItem>
              <span className="icon">🗄️</span>
              <span className="name">Databases</span>
            </TechItem>
          </TechGrid>
        </TechSection>

        <ProcessSection>
          <SectionTitle>Our Development Process</SectionTitle>
          <ProcessGrid>
            <ProcessStep step="1">
              <ProcessTitle>Discovery & Planning</ProcessTitle>
              <ProcessDescription>
                We start by understanding your business, goals, target audience, and requirements. 
                This phase includes competitor analysis, technology selection, and project timeline planning.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="2">
              <ProcessTitle>Design & Prototyping</ProcessTitle>
              <ProcessDescription>
                Our designers create wireframes and visual mockups that align with your brand. 
                We iterate on designs based on your feedback until we achieve the perfect look and feel.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="3">
              <ProcessTitle>Development & Coding</ProcessTitle>
              <ProcessDescription>
                Our developers bring designs to life using clean, efficient code. We follow best practices 
                for performance, security, and maintainability while keeping you updated on progress.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="4">
              <ProcessTitle>Testing & Quality Assurance</ProcessTitle>
              <ProcessDescription>
                Rigorous testing across different devices, browsers, and scenarios ensures your website 
                works flawlessly. We test functionality, performance, security, and user experience.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="5">
              <ProcessTitle>Launch & Deployment</ProcessTitle>
              <ProcessDescription>
                We handle the technical aspects of launching your website, including domain setup, 
                hosting configuration, and SSL installation. Your site goes live smoothly and securely.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="6">
              <ProcessTitle>Support & Maintenance</ProcessTitle>
              <ProcessDescription>
                Ongoing support ensures your website stays updated, secure, and performing optimally. 
                We provide regular backups, security updates, and technical support as needed.
              </ProcessDescription>
            </ProcessStep>
          </ProcessGrid>
        </ProcessSection>

        <ShowcaseSection>
          <SectionTitle>Professional Web Solutions</SectionTitle>
          <ShowcaseText>
            Every website we create is a unique blend of creativity, functionality, and technical excellence. 
            We focus on creating user-centered designs that not only look stunning but also provide intuitive 
            navigation and seamless user experiences. Our development approach ensures that your website is 
            fast, secure, search-engine friendly, and built to scale with your business growth.
          </ShowcaseText>
          <ShowcaseImage />
        </ShowcaseSection>

        <PricingSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Affordable Pricing Plans
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            Quality web development shouldn't break the bank. We offer flexible pricing options for businesses of all sizes.
          </p>
          <PricingGrid>
            <PricingCard>
              <h3>Starter Package</h3>
              <div className="price">₹15,000+</div>
              <ul>
                <li>5-Page Website</li>
                <li>Responsive Design</li>
                <li>Basic SEO Setup</li>
                <li>Contact Forms</li>
                <li>3 Months Support</li>
              </ul>
            </PricingCard>

            <PricingCard>
              <h3>Business Package</h3>
              <div className="price">₹35,000+</div>
              <ul>
                <li>10-Page Website</li>
                <li>Custom Design</li>
                <li>Advanced SEO</li>
                <li>CMS Integration</li>
                <li>6 Months Support</li>
                <li>Analytics Setup</li>
              </ul>
            </PricingCard>

            <PricingCard>
              <h3>Enterprise Package</h3>
              <div className="price">Custom Quote</div>
              <ul>
                <li>Unlimited Pages</li>
                <li>E-Commerce Features</li>
                <li>Custom Development</li>
                <li>Advanced Integrations</li>
                <li>12 Months Support</li>
                <li>Performance Optimization</li>
              </ul>
            </PricingCard>
          </PricingGrid>
        </PricingSection>

        <CTASection>
          <SectionTitle>Ready to Transform Your Online Presence?</SectionTitle>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 20px' }}>
            Let's discuss your web development project and create something amazing together. 
            Our team is ready to bring your vision to life with cutting-edge technology and creative design.
          </p>
          <CTAButton as={Link} to="/contact">
            Start Your Project Today 
          </CTAButton>
        </CTASection>
      </ContentSection>
    </WebDevWrapper>
  );
}

export default WebDevelopment;