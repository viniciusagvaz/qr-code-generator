import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1.25rem;
  color: ${({ theme }) => theme["--primary-200"]};
  background: ${({ theme }) => theme["--background-gradient"]};
  padding: 2rem 0;
`;
