import { useContext } from 'react';
import { Layout } from '../components/layouts';
import { UIContext } from '../context';

const AboutPage = () => {
  const {themeColor} = useContext(UIContext)

  return (
    <Layout>
        <h1>About Page {themeColor}</h1>
    </Layout>
  )
}

export default AboutPage