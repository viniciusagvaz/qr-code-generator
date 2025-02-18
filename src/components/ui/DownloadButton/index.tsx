import * as S from './styles';
import { useDownloadQRCode } from '../../../hooks/useDownloadQRCode';


export const DownloadButton = () => {
  const { handleDownload } = useDownloadQRCode()

  return <S.DownloadButton
    type={"button"}
    value={"Download QR"}
    onClick={handleDownload}
  />
}
