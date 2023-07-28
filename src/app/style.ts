'use client'

import { styled } from 'styled-components';


export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.container.mobile};
`

export const Wrapper = styled(Container)``

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark['40']};
  font-weight: 400;
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    max-width: 315px;
  }
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark['30']};
  font-weight: 500;
  font-size: .875rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    max-width: 450px;
  }
`