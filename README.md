# RE Toolbox: Real Estate Investment Calculator Suite

![RE Toolbox Banner](https://github.com/CryptoSpaceStudios/REToolbox/blob/main/public/images/banner-top.svg)

This project provides a suite of calculators and tools for real estate investors.

## 🔑Key Features

- ✨ Simple, Minimal and Fast
- 📱 Fully Responsive with [Material UI](https://mui.com/) Components
- 📊 Google Analytics support
- 🗂️ Caching enabled
- ✉️ Supports Contact Form
- 🌍 SEO Friendly with comprehensive meta tags
- ☎️ [PWA Enabled](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- ❓ [Vercel Analytics](https://vercel.com/analytics)
- 🏠 Maximum Allowable Offer (MAO) Calculator
- 💰 Return on Investment (ROI) Calculators:
  - 🏡 Buy and Hold
  - 🏠 Fix and Flip
  - 🏘️ Short-Term Rental
  - 🏡 Wholesale
- 📝 Subject To / Wrap Calculator
- 💵 Seller Net Calculator


## ⚙️Installation

* Install dependencies

`npm install`

* Run locally

`npm run dev`

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.
`npm run build`



## Config

The project configuration is primarily managed through JSON files located in the `config/` directory:

- `config/config.json`: Contains site-wide settings, including:
  - Site metadata (title, description, keywords, author, URL)
  - Social media handles
  - Logo dimensions
  - Pagination settings
  - Contact form action
  - Google Tag Manager ID
  - Extensive SEO and bot-related metadata

- `config/menu.json`: Defines the structure for main navigation and footer menus

- `config/theme.json`: Specifies the color scheme and typography settings for the site



**If you are using Vercel, the VERCEL_URL environment variable autopopulates for sitemap generation**

**If not using Vercel, set the SITE_URL in your .env file (e.g., SITE_URL=https://yourdomain.com)**

**On Vercel, modify your build settings: use "npm run build" as the build command**



## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
