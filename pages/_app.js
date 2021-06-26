import 'styles/main.scss'
import Layout, { user } from 'components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])
  return (
    <>
      <Head>
        <title>{user}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </>
  )
}

export default MyApp
