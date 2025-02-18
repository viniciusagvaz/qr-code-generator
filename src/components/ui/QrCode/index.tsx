import * as S from './styles';

import QRCode from 'react-qr-code';


interface IQrCode {
  link: string | null;
}


export const QrCodeComponent: React.FC<IQrCode> = ({ link }) => {
  return (
    <S.QrCodeContainer>
      {link ? (
        <QRCode
          id={"QRCode"}
          value={link}
        />
      ) : (
        <S.QrCodePlaceholder />
      )}
    </S.QrCodeContainer>
  );
};
