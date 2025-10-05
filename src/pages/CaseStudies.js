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

const CaseStudy = styled.article`
  margin-bottom: 3rem;
`;

const CaseTitle = styled.h2`
  font-size: 1.8rem;
  color: #2e3440;
  margin-bottom: 0.5rem;
`;

const CaseContent = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
`;

function CaseStudies() {
  return (
    <Container>
      <Title>Case Studies</Title>
      <Subtitle>
        We are in the process of building our portfolio. Stay tuned for detailed case studies showcasing how we help businesses achieve their goals with custom software solutions.
      </Subtitle>

      <CaseStudy>
        <CaseTitle>Coming Soon</CaseTitle>
        <CaseContent>
          We look forward to sharing real-world examples of our work here soon. Meanwhile, feel free to contact us to discuss your project.
        </CaseContent>
      </CaseStudy>
    </Container>
  );
}

export default CaseStudies;