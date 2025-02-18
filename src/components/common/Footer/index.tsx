import * as S from './styles';


export const Footer = () => {

  return (
    <S.Footer>

      <p>
        {new Date().getFullYear()}© Desenvolvido por
      </p>

      <a href="https://github.com/viniciusagvaz" target="_blank">
        Vinicius Vaz
      </a>
    </S.Footer>
  );
}
