'use client'

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
  }
`

export const MomentsCards = styled.ul`
  
`

export const OtherMoments = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`