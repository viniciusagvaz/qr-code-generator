import QRCode from 'react-qr-code';
import * as S from './styles';
import { useState } from 'react';
import { Title } from '../../components/common/Title/styles';
import { DownloadButton } from '../../components/ui/DownloadButton';


export const Main = () => {
  const [link, setLink] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setLink(e.target.value)
  }

  return (
    <S.Main>
      <S.Container >
        <Title children={'QRCode Generator'} />
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
        <DownloadButton />
      </S.Container>
    </S.Main>
  );
}
