import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e9edf3 0%, #f5f7fa 100%);
  padding: 40px 20px 80px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftSection = styled(motion.div)`
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const RightSection = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2e3440;
  margin-bottom: 20px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #5e4b8b;
  margin-bottom: 30px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #444;
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 15px;
  width: 30px;
`;

const ResponseTime = styled.div`
  background: linear-gradient(45deg, #5e4b8b, #7e6ba3);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  
  h3 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.9;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #2e3440;
  margin-bottom: 10px;
  font-weight: 700;
`;

const FormSubtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #5e4b8b;
    box-shadow: 0 0 0 3px rgba(94, 75, 139, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #5e4b8b;
    box-shadow: 0 0 0 3px rgba(94, 75, 139, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #5e4b8b;
    box-shadow: 0 0 0 3px rgba(94, 75, 139, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff6f00, #ff8f00);
  color: white;
  font-weight: 700;
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 111, 0, 0.3);
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255, 111, 0, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Required = styled.span`
  color: #e74c3c;
  margin-left: 3px;
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(45deg, #4caf50, #66bb6a);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-top: 20px;
  
  h3 {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
  }
  
  p {
    margin: 0;
    opacity: 0.9;
  }
`;

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Replace with your EmailJS credentials
    const result = await emailjs.send(
      'service_pv03wpe',        // Replace with your service ID
      'template_hgr5fhi',       // Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: formData.serviceType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        to_email: 'aunitech117@gmail.com', // Your email
      },
      '8r3NaIdV5UmXlI2jL'         // Replace with your public key
    );
    
    console.log('Email sent successfully:', result);
    setIsSubmitted(true);
    
  } catch (error) {
    console.error('Email send failed:', error);
    alert('Sorry, there was an error sending your message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
  
  // Reset form after 5 seconds
  setTimeout(() => {
    setIsSubmitted(false);
    setFormData({
      name: '', email: '', phone: '', company: '',
      serviceType: '', budget: '', timeline: '', message: ''
    });
  }, 5000);
};

  return (
    <PageContainer>
      <Container>
        <LeftSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Let's Build Something Amazing Together</Title>
          <Subtitle>Feel free to contact us for any information or queries to succeed your business</Subtitle>
          <Description>
            We're here to help transform your ideas into powerful digital solutions. 
            Whether you need a custom web application, mobile app, business email setup, 
            or standalone software, our expert team is ready to discuss your project 
            and provide tailored solutions that drive your business forward.
          </Description>
          
          <ContactInfo>
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <div>
                <strong>Email:</strong><br />
                info@karvitech-software-solutions-co
              </div>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🌐</InfoIcon>
              <div>
                <strong>Services:</strong><br />
                Web Development, Mobile Apps, Business Email
              </div>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🎯</InfoIcon>
              <div>
                <strong>Focus:</strong><br />
                Custom Solutions for Your Business Success
              </div>
            </InfoItem>
          </ContactInfo>

          <ResponseTime>
            <h3>⚡ Quick Response Guarantee</h3>
            <p>We will contact you within 24-48 hours during working days</p>
          </ResponseTime>
        </LeftSection>

        <RightSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FormTitle>Get Your Free Consultation</FormTitle>
          <FormSubtitle>
            Tell us about your project and we'll provide a detailed proposal with timeline and pricing.
          </FormSubtitle>

          {isSubmitted ? (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>🎉 Thank you for contacting us!</h3>
              <p>We've received your message and will get back to you within 24-48 hours during working days.</p>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label>Full Name <Required>*</Required></Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Service Type <Required>*</Required></Label>
                  <Select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Applications</option>
                    <option value="business-email">Business Email Setup</option>
                    <option value="standalone-software">Standalone Software</option>
                    <option value="consultation">General Consultation</option>
                  </Select>
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label>Email Address <Required>*</Required></Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Phone Number <Required>*</Required></Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label>Company Name</Label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Project Budget</Label>
                  <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </Select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label>Project Timeline</Label>
                <Select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">When do you need this completed?</option>
                  <option value="asap">ASAP - Rush Project</option>
                  <option value="1-month">Within 1 Month</option>
                  <option value="2-3-months">2-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="flexible">I'm Flexible</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Project Details <Required>*</Required></Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project requirements, goals, and any specific features you need. The more details you provide, the better we can help you!"
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Message...' : 'Send Message & Get Free Quote'}
              </SubmitButton>
            </Form>
          )}
        </RightSection>
      </Container>
    </PageContainer>
  );
}

export default ContactUs;