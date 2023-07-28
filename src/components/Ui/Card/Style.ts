'use client'

import { styled } from 'styled-components';

interface IWrapper {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div<IWrapper>`
  position: relative;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '350px'};
  padding: .375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  img {
    object-fit: cover;
  }
`

export const Description = styled.p`
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-family: var(--lexend-deca);
  color: ${({ theme }) => theme.colors.dark['40']};
  font-size: .875rem;
`

export const Tag = styled.span<{ type: 'litte' | 'regular' }>`
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 999;
  display: inline-block;
  color: ${({ theme }) => theme.colors.dark['40']};
  font-family: var(--lexend-deca);
  font-size: .75rem;
  background: ${({ theme }) => theme.colors.brandColor};
  padding: .125rem ${(({ type }) => type === 'regular' ? '1.375rem' : '0.875rem') };
  border-radius: 3px;
`