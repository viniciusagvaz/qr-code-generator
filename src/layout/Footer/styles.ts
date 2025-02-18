import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ theme }) => theme["--primary-200"]};
  background: ${({ theme }) => theme["--background-gradient"]};
  height: 10vh;
`;
