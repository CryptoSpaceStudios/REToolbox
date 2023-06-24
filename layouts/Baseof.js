import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const {
    
    meta_appleBot_options,
    meta_apple_webapp_barstyle, 
    meta_apple_webapp_capable,
    meta_author,
    meta_author_url,
    meta_baiduBot_options,
    meta_bingBot_options,
    meta_ccBot_options,
    meta_color_scheme,
    meta_description,
    meta_duckDuckBot_options,
    meta_faceBot_options,
    meta_format_detection,
    meta_googleBot_options,
    meta_googleOther_Bot_options,
    meta_googleInspectionTool_Bot_options,
    meta_image, 
    meta_ninjaBot_options,
    meta_slurpBot_options,
    meta_twitterBot_options,
    meta_yandexBot_options,

    } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { registrationStrategy: 'registerImmediately' });
    }
  }, []);

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* Keep this alphabetized so it's easier to find stuff */}


        {/* Apple PWA */}
        <meta name="apple-touch-fullscreen" content="YES" />
        <meta name="apple-touch-icon" href="/icons/apple-icon-36x36.png" />
        <meta name="apple-touch-icon" sizes="48x48" href="/icons/apple-icon-48x48.png" />
        <meta name="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <meta name="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <meta name="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x1120.png" />
        <meta name="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <meta name="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <meta name="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <meta name="apple-mobile-web-app-capable" content={meta_apple_webapp_capable} />
        <meta name="apple-mobile-web-app-status-bar-style" content={meta_apple_webapp_barstyle} />
        <meta name="apple-mobile-web-app-title" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />

        {/* apple webcrawler */}
        <meta name="Applebot" content={plainify(meta_appleBot_options)} />

        {/* PWA Application Name */}
        <meta 
            name="application-name" 
            content={plainify( meta_title ? meta_title : title ? title : config.site.title )}
            />    

        {/* author from config.json */}
        <meta name="author" content={meta_author} url={meta_author_url} />

        {/* baidu webcrawler */}
        <meta name="Bingbot" content={plainify(meta_bingBot_options)} />

        {/* baidu webcrawler */}
        <meta name="Baidubot" content={plainify(meta_baiduBot_options)} />

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* CC webcrawler */}
        <meta name="CCbot" content={plainify(meta_ccBot_options)} />

        {/* Character Set */}
        <meta name="charset" content="UTF-8" />

        {/* PWA Color Scheme */}
        <meta name="colorscheme" content={meta_color_scheme} />

        {/* meta-description */}
        <meta name="description" content={plainify(description ? description : meta_description)} />

        {/* DuckDuckGo webcrawler */}
        <meta name="DuckDuckbot" content={plainify(meta_duckDuckBot_options)} />

        {/* Facebook webcrawler */}
        <meta name="facebot" content={plainify(meta_faceBot_options)} />

        {/* PWA Format Detection */}
        <meta name="format-detection" content={meta_format_detection} />

        {/* GoogleBot */}
        <meta name="Googlebot" content={plainify(meta_googleBot_options)} />
        <meta name="Google-InspectionTool" content={plainify(meta_googleInspectionTool_Bot_options)} />
        <meta name="GoogleOther" content={plainify(meta_googleOther_Bot_options)} />

        {/* HTTP  */}
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />

        {/* PWA Manifest */}
        <link rel="manifest" href="manifest.json" />

        {/* Mobile PWA Capable */}
        <meta name="mobile-web-app-capable" content="YES" />

        {/* PWA M$ Browserconfig */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication--starturl" content={base_url} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="msapplication-tooltip" content={plainify(description ? description : meta_description)} />

        {/* NinjaBot webcrawler */}
        <meta name="Ninjabot" content={plainify(meta_ninjaBot_options)} />

        {/* og */}
        <meta property="og:description" content={plainify(description ? description : meta_description)}/>
        <meta property="og:image" content={`${base_url}${image ? image : meta_image}`} />
        <meta property="og:image:alt" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />   
        <meta property="og:type" content="website" />
        <meta property="og:url"  content={base_url} />

        {/* Owner */}
        <meta name="owner" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* PWA Start URL */}
        <meta name="start_url" content="./" />

        {/* SlurpBot webcrawler */}
        <meta name="Slurpbot" content={plainify(meta_slurpBot_options)} />

        {/* SlurpBot webcrawler */}
        <meta name="Twitterbot" content={plainify(meta_twitterBot_options)} />

        {/* theme meta */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@D_whitten1" />
        <meta name="twitter:description" content={plainify(description ? description : meta_description)} />
        <meta name="twitter:image" content={`${base_url}${image ? image : meta_image}`} />
        <meta name="twitter:image:alt" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />
        <meta name="twitter:image:width" content="500" />
        <meta name="twitter:image:height" content="500" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:title" content={plainify( meta_title ? meta_title : title ? title : config.site.title )} />

        {/* YandexBot webcrawler */}
        <meta name="Yandexbot" content={plainify(meta_yandexBot_options)} />

      </Head>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
