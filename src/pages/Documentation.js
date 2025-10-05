import React from "react";
import styled from "styled-components";

const Container = styled.main`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 24px;
  color: #2e3440;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #5e4b8b;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2e3440;
  margin-bottom: 0.8rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
`;

function Documentation() {
  return (
    <Container>
      <Title>Documentation</Title>
      <Subtitle>
        We’re excited to start building our documentation to help you get the most out of our software solutions. Here’s what you can expect as we grow:
      </Subtitle>

      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <SectionContent>
          Clear and simple guides to help you begin using our software with confidence.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Features Overview</SectionTitle>
        <SectionContent>
          Detailed explanations of features and how they can benefit your business — coming soon!
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Troubleshooting & Support</SectionTitle>
        <SectionContent>
          Helpful tips and solutions to common questions, plus how to reach out for personalized assistance.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Continuous Updates</SectionTitle>
        <SectionContent>
          Our documentation will grow and improve alongside our software — stay tuned for new content and updates.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionContent>
          If you have any questions or need support, please don’t hesitate to contact us. We’re here to help!
        </SectionContent>
      </Section>
    </Container>
  );
}

export default Documentation;