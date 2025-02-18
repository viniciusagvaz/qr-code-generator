import styled from "styled-components";

export const DefaultLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  
  min-height: 100vh;
  width: 100%;

  color: ${({ theme }) => theme["--primary-200"]};
  background: ${({ theme }) => theme["--background-gradient"]};
`;
