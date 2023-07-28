
import Image from 'next/image';
import * as S from "./style";
import { Menu } from './Menu';

export function Header() {
  return (
    <S.Wrapper as="header">
      <Image
        src="/naped.svg"
        alt="Naped logo"
        width={79}
        height={30}
      />
      <Menu />
      <S.MyAccount>Minha conta</S.MyAccount>
    </S.Wrapper>
  )
}