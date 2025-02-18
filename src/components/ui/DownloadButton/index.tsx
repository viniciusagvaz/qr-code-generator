import * as S from './styles';
import { useDownloadQRCode } from '../../../hooks/useDownloadQRCode';

interface DownloadButtonProps {
  disabled?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ disabled }) => {
  const { handleDownloadQRCode } = useDownloadQRCode()

  const handleClick = () => {
    if (!disabled) {
      handleDownloadQRCode();
    } else {
      alert("Por favor, insira um link para gerar o QR Code.");
    }
  }

  return <S.DownloadButton
    type={"button"}
    value={"Download QR"}
    onClick={handleClick}
  />
}
