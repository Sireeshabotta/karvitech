import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BusinessEmailWrapper = styled.div`
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
  text-align: center;
  
  @media (max-width: 768px) {
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
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    
    &:last-child {
      margin-bottom: 0;
    }
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

const FeaturesSection = styled.div`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 40px auto 0;
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 15px;
    display: block;
  }
  
  h3 {
    font-size: 1.4rem;
    margin: 0 0 15px;
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const BenefitsSection = styled.div`
  margin: 80px 0;
  
  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const BenefitCard = styled.div`
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

const BenefitIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6f00, #ff8f00);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a237e;
  margin: 0 0 15px;
  font-weight: 600;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
`;

const ComparisonSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  margin: 80px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 60px 0;
  }
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin-top: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background: #f8f9fa;
    color: #1a237e;
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  td {
    color: #555;
    vertical-align: top;
  }
  
  .check {
    color: #4caf50;
    font-weight: 600;
  }
  
  .cross {
    color: #f44336;
    font-weight: 600;
  }
`;

const SetupSection = styled.div`
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

const SetupSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SetupStep = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '${props => props.step}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #1a237e;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin: 15px 0 10px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.9;
  }
`;

const SupportSection = styled.div`
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

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SupportItem = styled.div`
  padding: 20px;
  
  .support-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    display: block;
    color: #ff6f00;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #1a237e;
    margin: 0 0 10px;
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
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

function BusinessEmail() {
  return (
    <BusinessEmailWrapper>
      <HeroSection>
        <HeroTitle>📧 Professional Business Email Solutions</HeroTitle>
        <HeroSubtitle>
          Establish credibility and enhance communication with custom business email addresses 
          that reflect your professional brand
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroSection>
          <IntroText>
            <h3>🏢 Transform Your Business Communication</h3>
            <p>
              Your email address is often the first impression you make in business communications. 
              At Karvitech Software Solutions, we provide comprehensive business email solutions that help 
              you establish credibility, enhance security, and improve professional communication across 
              your organization.
            </p>
            <p>
              Say goodbye to generic email providers and hello to custom business email addresses that 
              match your domain name. Whether you're a small startup or an established enterprise, our 
              business email solutions are designed to grow with your organization while maintaining the 
              highest standards of security, reliability, and professional appearance.
            </p>
            <p>
              From setup and migration to ongoing support and maintenance, we handle all aspects of your 
              business email infrastructure, allowing you to focus on what matters most - growing your business 
              and serving your customers with confidence and professionalism.
            </p>
          </IntroText>
        </IntroSection>

        <SectionTitle>Our Business Email Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>📧</ServiceIcon>
            <ServiceTitle>Custom Email Setup</ServiceTitle>
            <ServiceDescription>
              Create professional email addresses using your domain name (e.g., info@yourbusiness.com). 
              We handle complete setup including domain configuration, DNS settings, MX records, and 
              email client configuration. Your custom email addresses enhance brand credibility and 
              create a professional impression with every communication.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔒</ServiceIcon>
            <ServiceTitle>Enterprise Security</ServiceTitle>
            <ServiceDescription>
              Advanced security features including spam filtering, virus protection, two-factor 
              authentication, and encrypted email transmission. Our security measures protect your 
              business communications from threats while ensuring compliance with industry standards 
              and maintaining data privacy and confidentiality.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>☁️</ServiceIcon>
            <ServiceTitle>Cloud Email Hosting</ServiceTitle>
            <ServiceDescription>
              Reliable cloud-based email hosting with 99.9% uptime guarantee. Access your emails 
              from anywhere, on any device with seamless synchronization across desktop, mobile, 
              and web clients. Automatic backups and redundant infrastructure ensure your emails 
              are always safe and accessible when you need them.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceTitle>Multi-Device Access</ServiceTitle>
            <ServiceDescription>
              Configure email access across all your devices including smartphones, tablets, laptops, 
              and desktop computers. We support all major email clients including Outlook, Apple Mail, 
              Gmail, and mobile apps. Seamless synchronization ensures consistent experience across 
              all platforms with real-time updates.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📊</ServiceIcon>
            <ServiceTitle>Email Management Tools</ServiceTitle>
            <ServiceDescription>
              Advanced email management features including shared calendars, contact management, 
              distribution lists, email aliases, and autoresponders. Organize your communication 
              efficiently with folder management, email rules, and search capabilities that help 
              you stay productive and organized.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔄</ServiceIcon>
            <ServiceTitle>Migration & Support</ServiceTitle>
            <ServiceDescription>
              Seamless migration from existing email providers with zero data loss. Our team handles 
              the complete transition process including email history transfer, contact migration, 
              and calendar synchronization. Ongoing technical support ensures smooth operation and 
              quick resolution of any issues that may arise.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        <FeaturesSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Why Choose Professional Business Email?
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto' }}>
            Professional business email solutions offer numerous advantages over free email services
          </p>
          <FeaturesGrid>
            <FeatureCard>
              <span className="feature-icon">🎯</span>
              <h3>Professional Credibility</h3>
              <p>
                Custom domain email addresses instantly enhance your business credibility and 
                create trust with customers, partners, and stakeholders.
              </p>
            </FeatureCard>

            <FeatureCard>
              <span className="feature-icon">🔐</span>
              <h3>Enhanced Security</h3>
              <p>
                Advanced security features protect your business communications from spam, 
                viruses, and cyber threats with enterprise-grade protection.
              </p>
            </FeatureCard>

            <FeatureCard>
              <span className="feature-icon">📈</span>
              <h3>Brand Recognition</h3>
              <p>
                Every email sent reinforces your brand identity and increases brand awareness 
                with consistent professional presentation.
              </p>
            </FeatureCard>

            <FeatureCard>
              <span className="feature-icon">💾</span>
              <h3>Data Control</h3>
              <p>
                Maintain complete control over your email data with custom retention policies 
                and backup solutions tailored to your business needs.
              </p>
            </FeatureCard>

            <FeatureCard>
              <span className="feature-icon">⚡</span>
              <h3>Reliable Performance</h3>
              <p>
                99.9% uptime guarantee ensures your email is always accessible when you need 
                it most, with fast delivery and minimal downtime.
              </p>
            </FeatureCard>

            <FeatureCard>
              <span className="feature-icon">🤝</span>
              <h3>Team Collaboration</h3>
              <p>
                Shared calendars, contacts, and collaboration tools enhance team productivity 
                and streamline business communication workflows.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <BenefitsSection>
          <SectionTitle>Business Email Benefits</SectionTitle>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>💼</BenefitIcon>
              <BenefitTitle>Professional Image</BenefitTitle>
              <BenefitDescription>
                Make a lasting impression with custom email addresses that reflect your business 
                name and enhance your professional reputation in every interaction.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>📧</BenefitIcon>
              <BenefitTitle>Unlimited Emails</BenefitTitle>
              <BenefitDescription>
                Send and receive unlimited emails without restrictions. Scale your communication 
                needs as your business grows without worrying about limitations.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>🌐</BenefitIcon>
              <BenefitTitle>Global Accessibility</BenefitTitle>
              <BenefitDescription>
                Access your emails from anywhere in the world with reliable cloud hosting and 
                seamless synchronization across all your devices and platforms.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>🛡️</BenefitIcon>
              <BenefitTitle>Advanced Protection</BenefitTitle>
              <BenefitDescription>
                Comprehensive security measures including anti-spam, anti-virus, and email 
                encryption protect your sensitive business communications.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>📞</BenefitIcon>
              <BenefitTitle>Expert Support</BenefitTitle>
              <BenefitDescription>
                Dedicated technical support team available to assist with setup, troubleshooting, 
                and ongoing maintenance of your email infrastructure.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>💰</BenefitIcon>
              <BenefitTitle>Cost-Effective</BenefitTitle>
              <BenefitDescription>
                Affordable business email solutions that provide enterprise-level features without 
                the enterprise-level costs, perfect for businesses of all sizes.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>

        <ComparisonSection>
          <SectionTitle>Business Email vs Free Email</SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
            See the difference professional business email makes for your organization
          </p>
          <ComparisonTable>
            <Table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Business Email</th>
                  <th>Free Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Custom Domain</strong></td>
                  <td className="check">✓ your@business.com</td>
                  <td className="cross">✗ your@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>Professional Credibility</strong></td>
                  <td className="check">✓ Enhanced trust</td>
                  <td className="cross">✗ Generic appearance</td>
                </tr>
                <tr>
                  <td><strong>Data Control</strong></td>
                  <td className="check">✓ Full ownership</td>
                  <td className="cross">✗ Provider controlled</td>
                </tr>
                <tr>
                  <td><strong>Advanced Security</strong></td>
                  <td className="check">✓ Enterprise-grade</td>
                  <td className="cross">✗ Basic protection</td>
                </tr>
                <tr>
                  <td><strong>Storage Space</strong></td>
                  <td className="check">✓ Generous/Unlimited</td>
                  <td className="cross">✗ Limited space</td>
                </tr>
                <tr>
                  <td><strong>Technical Support</strong></td>
                  <td className="check">✓ Dedicated support</td>
                  <td className="cross">✗ Community forums</td>
                </tr>
                <tr>
                  <td><strong>Advertising</strong></td>
                  <td className="check">✓ Ad-free experience</td>
                  <td className="cross">✗ Contains ads</td>
                </tr>
                <tr>
                  <td><strong>Brand Recognition</strong></td>
                  <td className="check">✓ Reinforces brand</td>
                  <td className="cross">✗ Promotes other brands</td>
                </tr>
              </tbody>
            </Table>
          </ComparisonTable>
        </ComparisonSection>

        <SetupSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Quick & Easy Setup Process
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            Get your professional business email up and running in just a few simple steps
          </p>
          <SetupSteps>
            <SetupStep step="1">
              <h3>Consultation</h3>
              <p>Discuss your email needs and choose the right solution for your business</p>
            </SetupStep>

            <SetupStep step="2">
              <h3>Domain Setup</h3>
              <p>Configure your domain and set up professional email addresses</p>
            </SetupStep>

            <SetupStep step="3">
              <h3>Migration</h3>
              <p>Transfer existing emails and data to your new business email system</p>
            </SetupStep>

            <SetupStep step="4">
              <h3>Configuration</h3>
              <p>Set up email clients on all your devices for seamless access</p>
            </SetupStep>

            <SetupStep step="5">
              <h3>Training</h3>
              <p>Learn to use all features effectively with our comprehensive guidance</p>
            </SetupStep>

            <SetupStep step="6">
              <h3>Go Live</h3>
              <p>Start using your professional business email with full support</p>
            </SetupStep>
          </SetupSteps>
        </SetupSection>

        <SupportSection>
          <SectionTitle>Comprehensive Support & Services</SectionTitle>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto 20px' }}>
            We provide ongoing support to ensure your business email runs smoothly and efficiently
          </p>
          <SupportGrid>
            <SupportItem>
              <span className="support-icon">🔧</span>
              <h3>Technical Setup</h3>
              <p>Complete email system configuration and optimization for your specific needs</p>
            </SupportItem>

            <SupportItem>
              <span className="support-icon">📚</span>
              <h3>User Training</h3>
              <p>Comprehensive training for your team on email features and best practices</p>
            </SupportItem>

            <SupportItem>
              <span className="support-icon">🛠️</span>
              <h3>Ongoing Maintenance</h3>
              <p>Regular updates, security patches, and performance optimization</p>
            </SupportItem>

            <SupportItem>
              <span className="support-icon">📞</span>
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support for any email-related issues or questions</p>
            </SupportItem>
          </SupportGrid>
        </SupportSection>

        <CTASection>
          <SectionTitle>Ready to Upgrade Your Business Email?</SectionTitle>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 20px' }}>
            Take the first step towards professional business communication. Our team is ready to help 
            you set up a powerful email solution that grows with your business.
          </p>
          <CTAButton as={Link} to="/contact">
            Get Started Today 
          </CTAButton>
        </CTASection>
      </ContentSection>
    </BusinessEmailWrapper>
  );
}

export default BusinessEmail;