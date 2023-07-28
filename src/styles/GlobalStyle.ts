'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.dark['10']}
  }
  
  h1, h2, h3 {
    font-family: var(--lexend-deca);
  }

  p {
    font-family: var(--inter);
  }

  li {
    list-style: none;
  }
`