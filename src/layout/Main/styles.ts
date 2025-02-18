import styled from "styled-components";

export const Main = styled.main`
  color: ${({ theme }) => theme["--primary-400"]};
  background: ${({ theme }) => theme["--background-gradient"]};  
  height: 70vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  height: 100%;
  
  margin: 0 auto;
`;
