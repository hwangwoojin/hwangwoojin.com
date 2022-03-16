/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';

export default function Font() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=optional"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&family=Nanum+Pen+Script&display=optional"
        rel="preload"
        as="style"
      />
    </>
  );
}
