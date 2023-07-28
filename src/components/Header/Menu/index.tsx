'use client'

import { useToggleElement } from '@/hooks/useToggleElement';
import * as S from "./style";
import Link from 'next/link';
import Image from 'next/image';
import hamburguerMenu from "@/assets/mobile-menu-icon.svg";

export function Menu() {
  const { visibility, toggleElement } = useToggleElement(false);

  return (
    <S.Navigation>
      {visibility && (
        <S.MenuList>
          <S.MenuItem>
            <Link href="">Home</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="">Séries</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="">Filmes</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="">Animes</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="">Games</Link>
          </S.MenuItem>
        </S.MenuList>
      )}
      <S.MenuMobileButton onClick={toggleElement}>
        <Image src={hamburguerMenu} alt="Icone de menu hamburguer" />
      </S.MenuMobileButton>
    </S.Navigation>
  )
}