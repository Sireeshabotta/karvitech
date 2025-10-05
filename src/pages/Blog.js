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

const BlogPost = styled.article`
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  color: #2e3440;
  margin-bottom: 0.5rem;
`;

const BlogContent = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
`;

function Blog() {
  return (
    <Container>
      <Title>Karvitech Software Solutions Blog</Title>
      <Subtitle>
        Sharing our journey, insights, and plans as we build software solutions tailored to your needs.
      </Subtitle>

      <BlogPost>
        <BlogTitle>Welcome to Our Blog</BlogTitle>
        <BlogContent>
          We’re excited to start this journey and share our thoughts on software development, technology trends, and how we aim to help businesses grow.
        </BlogContent>
      </BlogPost>

      <BlogPost>
        <BlogTitle>Our Vision and Values</BlogTitle>
        <BlogContent>
          At Karvitech Software Solutions, we believe in transparency, collaboration, and delivering value through custom software. We look forward to growing with our clients and community.
        </BlogContent>
      </BlogPost>

      <BlogPost>
        <BlogTitle>What’s Next?</BlogTitle>
        <BlogContent>
          Stay tuned for upcoming posts about our projects, tips on software development, and industry news. We invite you to connect with us and share your thoughts.
        </BlogContent>
      </BlogPost>
    </Container>
  );
}

export default Blog;