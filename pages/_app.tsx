import React from 'react';
import type { AppProps } from 'next/app';

import '@/public/style/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
