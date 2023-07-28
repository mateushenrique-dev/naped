import { styled } from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuList = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin-right: .625rem;
`

export const MenuItem = styled.li`
  list-style: none;

  a {
    color: #fff;
    font-family: var(--inter);
    font-size: .625rem;
    text-decoration: none;
  }
`

export const MenuMobileButton = styled.button`
  background: transparent;
  border: none;
`