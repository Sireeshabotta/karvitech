import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #e4e9f0;
  color: #666;
  text-align: center;
  padding: 40px 20px;
  font-size: 0.9rem;
  border-top: 1px solid #ccc;
  font-weight: 300;
  letter-spacing: 0.05em;
  user-select: none;
  
  @media (max-width: 768px) {
    padding: 30px 16px;
    font-size: 0.85rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Karvitech Software Solutions. All rights reserved.
    </FooterWrapper>
  );
}

export default Footer;