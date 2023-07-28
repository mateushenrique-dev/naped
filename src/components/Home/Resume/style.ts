'use client'

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }
`

export const Resumes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
  height: 378px;
  overflow: scroll; 
`

export const Resume = styled.li`
  list-style: none;
  display: flex;
  gap: .5rem;
`

export const Picture = styled.div`
  position: relative;

  img {
    object-fit: cover;
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h3`
  font-family: var(--lexend-deca);
  font-size: .875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark['40']};
`

export const Date = styled.span`
  display: inline-block;
  font-family: var(--inter);
  font-size: .75rem;
  color: ${({ theme }) => theme.colors.dark['30']};
`

export const Read = styled.button`
  border: none;
  border-radius: 3px;
  padding: .25rem 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.brandColor};
  color: ${({ theme }) => theme.colors.dark['40']};
  font-family: var(--inter);
  font-size: .625rem;
`

export const OtherResumes = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

  }
`

export const ResumeTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark['40']};
  text-decoration: underline ${({ theme }) => theme.colors.brandColor};
`