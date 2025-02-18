import styled from "styled-components";

export const QrCodeContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 20px;
  min-height: 259px;
  max-width: 259px;
  width: 100%;

  #QRCode {
    height: auto;
    max-width: 100%;
    width: 100%;
  }
`;

export const QrCodePlaceholder = styled.figure`
  background: url(src/assets/qr.svg) no-repeat center center / cover #f9f9f9;

  max-width: 230px;
  width: 100%;
  height: 230px;
  padding: 0;
  margin: 0;
`;
