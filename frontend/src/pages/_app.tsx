import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../components/layout'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  )
}

export default App