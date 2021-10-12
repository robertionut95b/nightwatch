import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import apolloClient from '../lib/apollo/apolloClient'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
