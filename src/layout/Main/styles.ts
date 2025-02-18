import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${({ theme }) => theme["--primary-400"]};
  background: ${({ theme }) => theme["--background-gradient"]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

export const QrCodeContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 20px;
  min-height: 259px;
  max-width: 259px;
  width: 100%;
`;

export const QrCodePlaceholder = styled.figure`
  background: url(src/assets/qr.svg) no-repeat center center / cover #f9f9f9;

  max-width: 230px;
  width: 100%;
  height: 230px;
  padding: 0;
  margin: 0;
`;

export const LinkInput = styled.input`
  font-size: 16px;

  width: 70%;
  padding: 12px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

