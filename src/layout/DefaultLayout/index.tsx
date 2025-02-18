import * as S from './styles';

import { Header } from '../../components/common/Header/index.tsx';
import { Main } from '../../components/common/Main/index.tsx';
import { Footer } from '../../components/common/Footer/index.tsx';


export const DefaultLayout = () => {

  return (
    <S.DefaultLayout>
      <Header />
      <Main />
      <Footer />
    </S.DefaultLayout>
  );

}