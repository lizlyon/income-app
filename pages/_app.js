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
    --text: #ffffff;
    --green: #72a36c;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: white;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: gradient 30s ease infinite;
            animation: gradient 30s ease infinite;    
    color: var(--text);
    position: relative;

    @-webkit-keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f4',
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
