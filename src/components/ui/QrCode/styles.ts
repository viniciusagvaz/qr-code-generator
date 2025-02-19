import styled from "styled-components";

export const QrCodeContainer = styled.div`
  min-height: 259px;
  max-width: 259px;
  width: 100%;

  background-color: ${({ theme }) => theme["--primary-225"]};
  border-radius: 5px;
  padding: 1.6rem;
  margin-bottom: 1.6rem;

  #QRCode {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

export const QrCodePlaceholder = styled.figure`
  max-width: 230px;
  width: 100%;
  height: 230px;
  font-size: 2rem;
  color: #1d1d1d;

  padding: 0;
  margin: 0;
`;
