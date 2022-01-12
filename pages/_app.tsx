import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import '../styles/nprogress.css';
import 'reflect-metadata';
import React from 'react';
import apolloClient from '../lib/apollo/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'next-auth/client';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  Router.events.on('routeChangeStart', NProgress.start);
  Router.events.on('routeChangeComplete', NProgress.done);
  Router.events.on('routeChangeError', NProgress.done);
  NProgress.configure({ showSpinner: false });

  return (
    <Provider
      options={{ clientMaxAge: 0, keepAlive: 0 }}
      session={pageProps.session}
    >
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
