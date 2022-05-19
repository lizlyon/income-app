import styled from 'styled-components'
import Head from 'next/head'
import App from "../components/App"
import { supabase } from '../lib/supabase'
import { Auth } from '@supabase/ui'


export default function Home() {

  // comes from our Auth UserContextProvider
  const { user } = Auth.useUser()

  return (
  <Wrapper>
  <Head>
    <title> Income Tracker </title>
  </Head>
    {
      !user ? (
        <Content>
          <StyledAuth
            supabaseClient={supabase}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
          </Content>
      ) : (
        <Content>
          <App user={user} />
          <LogoutButton
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.log('Error logging out:', error.message)
            }}
          >
            Logout
          </LogoutButton>
        </Content>
      )}
</Wrapper>
);
}

const StyledAuth = styled(Auth)`
  .sbui-btn {
    background-color: var(--rose);
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
    letter-spacing: inherit;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  }
  .sbui-btn:hover {
    background-color: #b8d6a3;
  }
  label {
    color: var(--parchment);
  }
  .sbui-typography-link {
    color: var(--parchment);
  }
  .sbui-typography-text {
    color: var(--parchment);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`

const Content = styled.div`
  padding-top: 30px;
  flex: 1;
  max-width: min(100%, 900px);
`

const LogoutButton = styled.button`
  background: var(--rose);
  width: 100%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: inherit;
  padding: 10px;
  cursor: pointer;
  border-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;

  &:hover {
    background-color: #b8d6a3;
    color: white;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(0,0,.2,1);  }
  `