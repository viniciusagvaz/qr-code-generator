import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const QrCodeContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 20px;
  min-height: 259px;
  max-width: 259px;
  width: 100%;
`;

export const LinkInput = styled.input`
  font-size: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
`;

export const DownloadButton = styled.input`
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 70%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;  
