import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";

import { GoogleAdSense } from "nextjs-google-adsense";

const App = ({ Component, pageProps }) => {
  // default theme setup

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  const tagManagerArgs = { 
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={config.site.title} />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* SEO meta tags */}
        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={config.site.keywords ? config.site.keywords.join(", ") : ""} />
        <meta name="author" content={config.site.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={config.site.url} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={config.site.title} />
        <meta property="og:description" content={config.site.description} />
        <meta property="og:image" content={`${config.site.url}/icons/512.webp`} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:url" content={config.site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.site.title} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.site.title} />
        <meta name="twitter:description" content={config.site.description} />
        <meta name="twitter:image" content={`${config.site.url}/icons/512.webp`} />
        <meta name="twitter:site" content={config.site.twitterHandle} />
        <meta name="twitter:creator" content={config.site.twitterHandle} />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/36.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/72.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/192.webp" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/512.webp" />
      </Head>
      <GoogleAdSense publisherId="pub-8822117230676209" />
      <Component {...pageProps} />
      {/* <Analytics /> */} {/* Removed */}
    </>
  );
};

export default App;
