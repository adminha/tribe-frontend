import type { NextPage } from 'next'
import { useAppSelector } from '../app/hooks'
import Counter from '../features/counter/Counter'
import { selectLoginStatus } from './auth/login/login-redux'
import Login from './auth/[login]'
import Head from './templates/master/head'
import Master from './templates/master/master'
import RecentPosts from './[recent-posts]'

const IndexPage: NextPage = () => {
  const isLoggedIn = useAppSelector(selectLoginStatus)
  if (isLoggedIn == true) {
    return (
      <RecentPosts />
    )
  }
  else {
    return (
      <Login />
    )
  }
  
}

export default IndexPage
