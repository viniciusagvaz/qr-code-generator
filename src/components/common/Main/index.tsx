import * as S from './styles';
import { useState } from 'react';
import { DownloadButton } from '../../ui/DownloadButton';
import { LinkInput } from '../../ui/LinkInput';
import { QrCodeComponent } from '../../ui/QrCode';


export const Main = () => {
  const [link, setLink] = useState('')

  return (
    <S.Main>
      <S.Container >
        <QrCodeComponent link={link} />
        <LinkInput value={link} onChange={setLink} />
        {link ? <DownloadButton /> : <DownloadButton disabled />}
      </S.Container>
    </S.Main>
  );
}
