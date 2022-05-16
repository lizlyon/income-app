import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from "styled-components"
import { supabase } from '../lib/supabase'
import { Auth } from '@supabase/ui'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }body {
    --parchment: #DCCEB9;
    --burnt: #9A4D21;
    --rose: #D8A99D;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: var(--burnt);
    color: var(--parchment);
    position: relative;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
      <Auth.UserContextProvider supabaseClient={supabase}>
        <GlobalStyle />
      <ThemeProvider theme={theme}>
	    <Component {...pageProps} />
      </ThemeProvider>
	  </Auth.UserContextProvider>
  )
}
