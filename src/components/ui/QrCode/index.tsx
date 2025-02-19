import * as S from "./styles";

import QRCode from "react-qr-code";
import qr from "../../../assets/qr.svg";

interface IQrCode {
  link: string | null;
}

export const QrCode: React.FC<IQrCode> = ({ link }) => {
  const isInputEmpty = link ? (
    <QRCode id={"QRCode"} value={link} />
  ) : (
    <S.QrCodePlaceholder>
      <img src={qr} alt="qr code logo" />
    </S.QrCodePlaceholder>
  );

  return <S.QrCodeContainer>{isInputEmpty}</S.QrCodeContainer>;
};
