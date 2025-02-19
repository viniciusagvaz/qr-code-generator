import * as S from "./styles";
import { useDownloadQRCode } from "../../../hooks/useDownloadQRCode";

interface IDownloadButton {
  disabled?: boolean;
}

export const DownloadButton: React.FC<IDownloadButton> = ({ disabled }) => {
  const { handleDownloadQRCode } = useDownloadQRCode();

  const handleClick = () => {
    if (!disabled) {
      handleDownloadQRCode();
    }
  };

  return (
    <S.DownloadButton
      type={"button"}
      value={"Download QR"}
      onClick={handleClick}
      className={disabled ? "disabled-button" : ""}
    />
  );
};
