import React from "react";
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
  return (
    <Html>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500,600&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}