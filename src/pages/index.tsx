import type { NextPage } from 'next'
import { useAppSelector } from '../app/hooks'
import { selectLoginStatus } from '../app/login-redux'
import RecentPosts from './recent-posts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const IndexPage: NextPage = () => {
  const isLoggedIn = useAppSelector(selectLoginStatus)
	const router = useRouter()
	useEffect(() => {
	  isLoggedIn ? router.push('/recent-posts') : router.push('/auth/login')
	}, [])  
  return (
    <RecentPosts />
  )  
}

export default IndexPage
