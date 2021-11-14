import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import "../styles/nprogress.css";
import React from 'react'
import apolloClient from '../lib/apollo/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'next-auth/client'
import { Router } from 'next/dist/client/router'
import NProgress from 'nprogress'

export default function App({ Component, pageProps }) {

  Router.events.on("routeChangeStart", NProgress.start)
  Router.events.on("routeChangeComplete", NProgress.done)
  Router.events.on("routeChangeError", NProgress.done)

  NProgress.configure({ showSpinner: false })

  return (
    <Provider options={{ keepAlive: 0, clientMaxAge: 60 }} session={pageProps.session} >
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}
