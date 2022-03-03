import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import Favicon from '@/components/Favicon';

export default function Document() {
  return (
    <Html>
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
