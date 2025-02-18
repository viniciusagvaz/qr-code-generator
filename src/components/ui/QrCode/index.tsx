import * as S from './styles';

import QRCode from 'react-qr-code';
import qr from '../../../assets/qr.svg';

interface IQrCode {
  link: string | null;
}


export const QrCodeComponent: React.FC<IQrCode> = ({ link }) => {
  return (
    <S.QrCodeContainer>
      {link ?
        (<QRCode
          id={"QRCode"}
          value={link}
        />)
        :
        (
          <S.QrCodePlaceholder>
            <img src={qr} alt="qr code logo" />
          </S.QrCodePlaceholder>
        )
      }
    </S.QrCodeContainer>
  );
};
