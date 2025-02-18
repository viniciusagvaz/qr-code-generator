import * as S from './styles';
import { useState } from 'react';
import { Title } from '../../components/common/Title/styles';
import { DownloadButton } from '../../components/ui/DownloadButton';
import { LinkInput } from '../../components/ui/LinkInput';
import { QrCodeComponent } from '../../components/ui/QrCode';


export const Main = () => {
  const [link, setLink] = useState('')

  return (
    <S.Main>
      <S.Container >
        <Title children={'QRCode Generator'} />
        <QrCodeComponent link={link} />
        <LinkInput value={link} onChange={setLink} />
        <DownloadButton />
      </S.Container>
    </S.Main>
  );
}
