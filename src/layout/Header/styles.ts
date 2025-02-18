import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["--primary-200"]};
  background: ${({ theme }) => theme["--background-gradient"]};
  padding: 20px 0;
  position: relative;
  top: 0;
  height: 20vh;
`;


