import QRCode from 'react-qr-code';
import * as S from './styles';
import { useState } from 'react';
import useDownloadQRCode from '../../hooks/useDownloadQRCode';


export const Main = () => {
  const [link, setLink] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setLink(e.target.value)
  }

  const { handleDownload } = useDownloadQRCode()

  return (
    <S.Main>
      <S.Container >
        <S.Title>QRCode Generator</S.Title>
        <S.QrCodeContainer>
          {link ?
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={link}
              viewBox={`0 0 256 256`}
              id="QRCode"
            /> : <h1>Insira um link</h1>}
        </S.QrCodeContainer>
        <S.LinkInput placeholder='Insira um link' value={link} onChange={handleInput} />
        <S.DownloadButton
          type="button"
          value="Download QR"
          onClick={handleDownload}
        />
      </S.Container>
    </S.Main>
  );
}
