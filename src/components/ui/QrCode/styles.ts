import styled from "styled-components";

export const QrCodeContainer = styled.div`
  width: 100%;
  min-height: 259px;
  max-width: 259px;

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
<<<<<<< HEAD
=======
  
  background: url(../../../assets/qr.svg) no-repeat center center / cover
    ${({ theme }) => theme["--primary-200"]};
>>>>>>> f7456135e6bd1d5bf4c19970eb7b54da59bdd94f

  padding: 0;
  margin: 0;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;  
