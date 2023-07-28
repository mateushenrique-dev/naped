'use client'

import { Container } from '@/app/style';
import { styled } from 'styled-components';

export const Wrapper = styled(Container)`
  padding-top: 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.875rem;
`;

export const MyAccount = styled.a`
  display: block;
  grid-column: 1 / 4;
  color: #fff;
  font-family: var(--lexend-deca);
  padding: .5rem;
  font-size: .875rem;
  border: 1px solid ${(props) => props.theme.colors.brandColor};
  text-align: center;
  border-radius: 30px;
`