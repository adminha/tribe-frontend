import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Login from './auth/[login]'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className={styles.header}>
        <Counter />
      </header> */}
      <Login />
    </div>
  )
}

export default IndexPage