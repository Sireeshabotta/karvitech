import React from "react";
import styled from "styled-components";
import iosAndroidImage from '../assets/ios-vs-android.webp';
import lifecycleImage from '../assets/mobile-app-lifecycle.jpg';
import { Link } from "react-router-dom";

const MobileAppsWrapper = styled.div`
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
  grid-template-columns: 1fr 350px;
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
  width: 350px;
  height: 250px;
  background-image: url(${iosAndroidImage});
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

const PlatformSection = styled.div`
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

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 40px auto 0;
  text-align: center;
`;

const PlatformCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  
  .platform-icon {
    font-size: 4rem;
    margin-bottom: 15px;
    display: block;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 0 0 15px;
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const TechStackSection = styled.div`
  margin: 80px 0;
  
  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  .tech-icon {
    font-size: 3rem;
    margin-bottom: 15px;
    display: block;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #1a237e;
    margin: 0 0 10px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
  }
`;

const LifecycleSection = styled.div`
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

const LifecycleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  align-items: flex-start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LifecycleText = styled.div`
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

const LifecycleImage = styled.div`
  width: 400px;
  height: 300px;
  background-image: url(${lifecycleImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  
  @media (max-width: 968px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  text-align: justify;
`;

const FeaturesSection = styled.div`
  background: linear-gradient(135deg, #ff6f00, #ff8f00);
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
  margin-top: 40px;
`;

const FeatureItem = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    display: block;
  }
  
  h3 {
    font-size: 1.3rem;
    margin: 0 0 10px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.5;
    opacity: 0.9;
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

function MobileApps() {
  return (
    <MobileAppsWrapper>
      <HeroSection>
        <HeroTitle>📱 Mobile App Development</HeroTitle>
        <HeroSubtitle>
          Create powerful, user-friendly mobile applications for iOS and Android 
          that engage users and drive business growth
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroSection>
          <IntroText>
            <h3>Mobile-First Solutions</h3>
            <p>
              In today's mobile-centric world, having a powerful mobile app is essential for business 
              success. At Karvitech Software Solutions, we specialize in creating innovative mobile 
              applications that provide exceptional user experiences across both iOS and Android platforms.
            </p>
            <p>
              Our expert development team combines cutting-edge technology with creative design to build 
              apps that not only look stunning but also perform flawlessly. From concept to deployment, 
              we guide you through every step of the mobile app development journey, ensuring your vision 
              becomes a reality that users love to engage with.
            </p>
            <p>
              Whether you need a simple business app or a complex enterprise solution with advanced 
              features, we have the expertise and passion to deliver mobile applications that stand out 
              in the competitive app marketplace and drive meaningful results for your business.
            </p>
          </IntroText>
          <IntroImage />
        </IntroSection>

        <SectionTitle>Our Mobile App Development Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🍎</ServiceIcon>
            <ServiceTitle>iOS App Development</ServiceTitle>
            <ServiceDescription>
              Create stunning native iOS applications optimized for iPhone and iPad devices. 
              Our iOS apps leverage the latest Apple technologies and follow strict App Store 
              guidelines to ensure smooth approval and exceptional performance. From Swift 
              programming to intuitive UI/UX design that feels natural to iOS users.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🤖</ServiceIcon>
            <ServiceTitle>Android App Development</ServiceTitle>
            <ServiceDescription>
              Develop powerful Android applications that work seamlessly across diverse Android 
              devices and screen sizes. Our Android apps are built using modern technologies 
              and optimized for Google Play Store success. We ensure compatibility across 
              different Android versions and device configurations.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔄</ServiceIcon>
            <ServiceTitle>Cross-Platform Development</ServiceTitle>
            <ServiceDescription>
              Build once, deploy everywhere with our cross-platform development approach. 
              Using technologies like React Native and Flutter, we create apps that work 
              perfectly on both iOS and Android while maintaining native performance and 
              feel. This approach reduces development time and costs significantly.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🎨</ServiceIcon>
            <ServiceTitle>UI/UX Design</ServiceTitle>
            <ServiceDescription>
              Create intuitive and engaging user interfaces that provide exceptional user 
              experiences. Our design team focuses on user-centered design principles, 
              creating wireframes, prototypes, and visual designs that are both beautiful 
              and functional. Every interaction is carefully crafted for maximum usability.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🔧</ServiceIcon>
            <ServiceTitle>App Maintenance & Support</ServiceTitle>
            <ServiceDescription>
              Keep your mobile app running smoothly with our comprehensive maintenance and 
              support services. We provide regular updates, bug fixes, performance optimization, 
              security patches, and feature enhancements to ensure your app stays current 
              with evolving user needs and platform requirements.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🚀</ServiceIcon>
            <ServiceTitle>App Store Optimization</ServiceTitle>
            <ServiceDescription>
              Maximize your app's visibility and downloads with strategic App Store Optimization. 
              We handle app store listings, keyword optimization, compelling descriptions, 
              screenshot optimization, and submission processes for both Apple App Store 
              and Google Play Store to ensure maximum reach and success.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        <PlatformSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Platform Expertise
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            We develop for all major mobile platforms, ensuring your app reaches the widest possible audience
          </p>
          <PlatformGrid>
            <PlatformCard>
              <span className="platform-icon">📱</span>
              <h3>iOS Development</h3>
              <p>
                Native iOS apps built with Swift and Objective-C, optimized for iPhone, iPad, 
                and Apple Watch. Full integration with iOS ecosystem including Apple Pay, 
                Siri, and iCloud services.
              </p>
            </PlatformCard>

            <PlatformCard>
              <span className="platform-icon">🤖</span>
              <h3>Android Development</h3>
              <p>
                Native Android apps developed with Kotlin and Java, designed to work across 
                the diverse Android ecosystem. Integration with Google services, Material 
                Design guidelines, and Android-specific features.
              </p>
            </PlatformCard>

            <PlatformCard>
              <span className="platform-icon">🔄</span>
              <h3>Cross-Platform</h3>
              <p>
                Hybrid apps using React Native, Flutter, and other frameworks that deliver 
                native performance while maintaining single codebase efficiency. Perfect 
                for faster development and consistent user experience.
              </p>
            </PlatformCard>
          </PlatformGrid>
        </PlatformSection>

        <TechStackSection>
          <SectionTitle>Technologies We Use</SectionTitle>
          <TechGrid>
            <TechCard>
              <span className="tech-icon">⚛️</span>
              <h3>React Native</h3>
              <p>Cross-platform development with native performance and shared codebase</p>
            </TechCard>

            <TechCard>
              <span className="tech-icon">🐦</span>
              <h3>Flutter</h3>
              <p>Google's UI toolkit for building beautiful cross-platform applications</p>
            </TechCard>

            <TechCard>
              <span className="tech-icon">🍎</span>
              <h3>Swift/Objective-C</h3>
              <p>Native iOS development languages for optimal Apple device performance</p>
            </TechCard>

            <TechCard>
              <span className="tech-icon">☕</span>
              <h3>Kotlin/Java</h3>
              <p>Modern Android development with robust and scalable code architecture</p>
            </TechCard>

            <TechCard>
              <span className="tech-icon">🗄️</span>
              <h3>Backend Services</h3>
              <p>APIs, databases, and cloud services for complete app functionality</p>
            </TechCard>

            <TechCard>
              <span className="tech-icon">🔧</span>
              <h3>Testing Tools</h3>
              <p>Comprehensive testing frameworks ensuring bug-free app performance</p>
            </TechCard>
          </TechGrid>
        </TechStackSection>

        <LifecycleSection>
          <SectionTitle>Mobile App Development Lifecycle</SectionTitle>
          <LifecycleContent>
            <LifecycleText>
              <h3>Comprehensive Development Process</h3>
              <p>
                Our mobile app development follows a structured lifecycle approach that ensures 
                every project is delivered on time, within budget, and exceeds expectations. 
                From initial concept to final deployment, we maintain transparency and keep you 
                involved at every crucial stage.
              </p>
              <p>
                The development lifecycle includes thorough planning, user research, technical 
                architecture design, iterative development with regular testing, and comprehensive 
                quality assurance. This systematic approach minimizes risks and ensures your app 
                launches successfully with all features working perfectly.
              </p>
              <p>
                Post-launch support and maintenance are integral parts of our lifecycle, ensuring 
                your app continues to perform optimally and stays updated with the latest platform 
                requirements and user feedback.
              </p>
            </LifecycleText>
            <LifecycleImage />
          </LifecycleContent>
        </LifecycleSection>

        <ProcessSection>
          <SectionTitle>Our Development Process</SectionTitle>
          <ProcessGrid>
            <ProcessStep step="1">
              <ProcessTitle>Discovery & Strategy</ProcessTitle>
              <ProcessDescription>
                We begin with comprehensive research to understand your business goals, target 
                audience, and market requirements. This phase includes competitor analysis, 
                feature planning, and technical feasibility assessment to create a solid foundation.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="2">
              <ProcessTitle>Design & Prototyping</ProcessTitle>
              <ProcessDescription>
                Our design team creates wireframes, user flows, and interactive prototypes that 
                visualize your app's functionality. We focus on user experience design that ensures 
                intuitive navigation and engaging interactions across all device types.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="3">
              <ProcessTitle>Development & Coding</ProcessTitle>
              <ProcessDescription>
                Expert developers bring your app to life using best practices and latest technologies. 
                We follow agile development methodologies with regular sprint reviews and continuous 
                integration to ensure quality and timely delivery.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="4">
              <ProcessTitle>Testing & Quality Assurance</ProcessTitle>
              <ProcessDescription>
                Rigorous testing across multiple devices, operating systems, and scenarios ensures 
                your app works flawlessly. We conduct functional testing, performance testing, 
                security testing, and user acceptance testing before deployment.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="5">
              <ProcessTitle>Deployment & Launch</ProcessTitle>
              <ProcessDescription>
                We handle the complete app store submission process, including optimization for 
                better discoverability. Our team manages the technical aspects of launching your 
                app on Apple App Store and Google Play Store successfully.
              </ProcessDescription>
            </ProcessStep>

            <ProcessStep step="6">
              <ProcessTitle>Maintenance & Updates</ProcessTitle>
              <ProcessDescription>
                Post-launch support ensures your app stays current with platform updates and user 
                feedback. We provide ongoing maintenance, feature enhancements, performance 
                optimization, and technical support as needed.
              </ProcessDescription>
            </ProcessStep>
          </ProcessGrid>
        </ProcessSection>

        <FeaturesSection>
          <SectionTitle style={{ color: 'white', marginBottom: '20px' }}>
            Why Choose Our Mobile App Development?
          </SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            We combine technical expertise with creative innovation to deliver mobile apps that stand out
          </p>
          <FeaturesGrid>
            <FeatureItem>
              <span className="feature-icon">⚡</span>
              <h3>High Performance</h3>
              <p>Optimized apps that load quickly and run smoothly on all devices</p>
            </FeatureItem>

            <FeatureItem>
              <span className="feature-icon">🎨</span>
              <h3>Beautiful Design</h3>
              <p>Stunning user interfaces that provide exceptional user experiences</p>
            </FeatureItem>

            <FeatureItem>
              <span className="feature-icon">🔒</span>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security with robust data protection and privacy</p>
            </FeatureItem>

            <FeatureItem>
              <span className="feature-icon">📊</span>
              <h3>Analytics Integration</h3>
              <p>Built-in analytics to track user behavior and app performance</p>
            </FeatureItem>

            <FeatureItem>
              <span className="feature-icon">🌐</span>
              <h3>Global Reach</h3>
              <p>Multi-language support and international market optimization</p>
            </FeatureItem>

            <FeatureItem>
              <span className="feature-icon">🤝</span>
              <h3>Ongoing Support</h3>
              <p>Dedicated support team for maintenance and feature updates</p>
            </FeatureItem>
          </FeaturesGrid>
        </FeaturesSection>

        <CTASection>
          <SectionTitle>Ready to Build Your Mobile App?</SectionTitle>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 20px' }}>
            Let's transform your idea into a powerful mobile application that users will love. 
            Our experienced team is ready to guide you through every step of the development process.
          </p>
          <CTAButton as={Link} to="/contact">
            Start Your App Project 
          </CTAButton>
        </CTASection>
      </ContentSection>
    </MobileAppsWrapper>
  );
}

export default MobileApps;