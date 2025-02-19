import * as S from "./styles";
import { ILinkInput } from "../../../interfaces/LinkInput.interface";

export const LinkInput: React.FC<ILinkInput> = ({
  onChange,
  value: inputLink,
}) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <S.LinkInput
      placeholder={"Insira um link"}
      value={inputLink}
      onChange={onChangeValue}
    />
  );
};
