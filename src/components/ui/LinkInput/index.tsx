import { useState } from 'react';
import * as S from './styles';

export interface ILinkInput {
  onChange: (value: string) => void;
  value: string;
}

export const LinkInput: React.FC<ILinkInput> = ({ value }) => {
  const [inputLink, setLink] = useState(value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return <S.LinkInput placeholder={'Insira um link'} value={inputLink} onChange={handleInput} />;
};