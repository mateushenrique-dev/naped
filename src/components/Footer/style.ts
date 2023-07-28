'use client'

import { Container } from '@/app/style'
import { styled } from 'styled-components'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-bottom: 4.875rem;  
`

export const Title = styled.h2`
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors.brandColor};
  font-weight: 400;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.dark['30']};
  font-size: .875rem;
`