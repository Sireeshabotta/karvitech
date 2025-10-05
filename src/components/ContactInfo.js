import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactInfoSection = styled.section`
  padding: 100px 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  color: #1a1a2e;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0d47a1, #1976d2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.6;
`;

const MapWrapper = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 400px;
  
  @media (max-width: 968px) {
    height: 300px;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  align-items: center;
`;

const DayLabel = styled.span`
  font-weight: 600;
  color: #1a1a2e;
`;

const TimeLabel = styled.span`
  color: #6c757d;
`;

const PhoneNumber = styled.a`
  color: #0d47a1;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  
  &:hover {
    color: #1976d2;
    text-decoration: underline;
  }
`;

const Address = styled.div`
  color: #6c757d;
  line-height: 1.6;
`;

function ContactInfo() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <ContactInfoSection id="contact-info">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants}>
            Visit Our Office
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Get in touch with us or visit our office in Nellore. We're here to help you bring your software ideas to life.
          </SectionSubtitle>
          
          <ContentWrapper>
            <ContactDetails variants={itemVariants}>
              <ContactCard
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>📍</CardIcon>
                <CardTitle>Our Address</CardTitle>
                <CardContent>
                  <Address>
                    Karvitech Software Solutions<br/>
                    28-3-195, Zakir Hussain Nagar Road<br/>
                    Zakir Hussain Nagar, Kisan Nagar<br/>
                    Nellore, Sri Potti Sriramulu Nellore<br/>
                    Andhra Pradesh 524002, India
                  </Address>
                </CardContent>
              </ContactCard>

              <ContactCard
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>🕒</CardIcon>
                <CardTitle>Business Hours</CardTitle>
                <CardContent>
                  <HoursGrid>
                    <DayLabel>Monday - Friday:</DayLabel>
                    <TimeLabel>7:00 AM - 6:00 PM</TimeLabel>
                    <DayLabel>Saturday:</DayLabel>
                    <TimeLabel>9:00 AM - 2:00 PM</TimeLabel>
                    <DayLabel>Sunday:</DayLabel>
                    <TimeLabel>Closed</TimeLabel>
                  </HoursGrid>
                </CardContent>
              </ContactCard>

              <ContactCard
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>📞</CardIcon>
                <CardTitle>24/7 Phone Support</CardTitle>
                <CardContent>
                  <PhoneNumber href="tel:+919902468711">
                    +91 99024 68711
                  </PhoneNumber>
                  <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                    Available 24 hours for urgent support
                  </div>
                </CardContent>
              </ContactCard>

              <ContactCard
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>✉️</CardIcon>
                <CardTitle>Email Us</CardTitle>
                <CardContent>
                  <PhoneNumber href="mailto:info@karvitech.com">
                    info@karvitech.com
                  </PhoneNumber>
                  <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                    We'll respond within 24 hours
                  </div>
                </CardContent>
              </ContactCard>
            </ContactDetails>

            <MapWrapper variants={itemVariants}>
              <MapIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7234567890123!2d80.00299100000001!3d14.467491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzAzLjAiTiA4MMKwMDAnMTAuOCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karvitech Software Solutions Location - Nellore"
              ></MapIframe>
            </MapWrapper>
          </ContentWrapper>
        </motion.div>
      </Container>
    </ContactInfoSection>
  );
}

export default ContactInfo;