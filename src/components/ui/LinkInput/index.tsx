import * as S from './styles';

export interface ILinkInput {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const LinkInput: React.FC<ILinkInput> = ({ onChange, value: inputLink }) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return <S.LinkInput placeholder={'Insira um link'} value={inputLink} onChange={onChangeValue} />;
};