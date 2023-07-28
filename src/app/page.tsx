import * as S from "./style";
import { Moments } from '@/components/Home/Moments';
import { Recents } from '@/components/Home/Recents';
import { Resume } from '@/components/Home/Resume';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Title>Mundo Nerd? Naped</S.Title>
      <S.SubTitle>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</S.SubTitle>
      <Moments />
      <Resume />
      <Recents />
    </S.Wrapper>
  )
}
