import config from '@/functions/config'
import '@/styles/global.css'
import '@/styles/index.css'
import {DefaultSeo} from 'next-seo'
import Head from 'next/head'
import PropTypes from 'prop-types'

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title={`${config?.siteName} - ${config?.siteDescription}`}
        description={config?.siteDescription}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: config?.siteUrl,
          site_name: `${config?.siteName} - ${config?.siteDescription}`,
          images: [
            {
              url: config?.ogImage,
              width: 1200,
              height: 630,
              alt: config?.siteName
            }
          ]
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
