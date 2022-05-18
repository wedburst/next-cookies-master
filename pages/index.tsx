import type { NextPage } from 'next'
import { useContext } from 'react';
import { Layout } from '../components/layouts';
import { UIContext } from '../context';

const Home: NextPage = () => {
  const {themeColor} = useContext(UIContext)

  return (
    <Layout>
      <h1>Cookie Master {themeColor}</h1>
    </Layout>
  )
}

export default Home
