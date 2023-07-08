import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import { Suspense } from 'react';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
          alt='Favicon'
        />
      </Head>
      <body>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>  
        {/* <TwSizeIndicator /> */}
        <NextScript />
      
      </body>
    </Html>
  );


// EOF
};
export default Document;
