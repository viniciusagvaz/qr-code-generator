import * as S from "./styles";
import { useState } from "react";
import { DownloadButton } from "../../ui/DownloadButton";
import { LinkInput } from "../../ui/LinkInput";
import { QrCode } from "../../ui/QrCode";

export const Main = () => {
  const [link, setLink] = useState("");
  const isLinkEmpty = link ? <DownloadButton /> : <DownloadButton disabled />;

  return (
    <S.Main>
      <S.Container>
        <QrCode link={link} />
        <LinkInput value={link} onChange={setLink} />
        {isLinkEmpty}
      </S.Container>
    </S.Main>
  );
};
