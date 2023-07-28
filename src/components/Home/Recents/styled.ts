'use client'

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 2.5rem;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark['40']};
  margin-bottom: 2rem;
  padding-bottom: .375rem;
  text-decoration: underline ${({ theme }) => theme.colors.brandColor};
`

export const Recents = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Recent = styled.li`
  position: relative;
  width: 100%;
  height: 250px;

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