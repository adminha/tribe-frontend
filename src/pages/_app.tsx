import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Provider as TribeProvider } from '@tribeplatform/react-sdk'

import store from '../app/store'
import { useAppSelector } from '../app/hooks'
import { selectTribeAccessToken } from './auth/login/login-redux'
import MemberAccessToken from './auth/tribe/member-access-token'
import axios from 'axios'


export default function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <Provider store={store}>
      <TribeProvider
      config={{
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkhIZjc1U3VZZHEiLCJleHRlcm5hbEFjdG9ySWQiOiJBUFA6OjB1TVNBNm9OMDA5WiIsIm5ldHdvcmtJZCI6InF3eFNXaFgwNmkiLCJ0b2tlblR5cGUiOiJMSU1JVEVEIiwiZW50aXR5SWQiOiJxd3hTV2hYMDZpIiwicGVybWlzc2lvbkNvbnRleHQiOiJORVRXT1JLIiwicGVybWlzc2lvbnMiOlsiKiJdLCJpYXQiOjE2NDg5ODM0MjUsImV4cCI6MTY1MTU3NTQyNX0.1E-7tD2uunC75me2-K30lH9FzhUdr0yxYFx4akQfCnM',
        baseUrl: 'https://app.tribe.so/graphql',
      }}
      >
        <Component {...pageProps} />
      </TribeProvider>
    </Provider>
  )
}
