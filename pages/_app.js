import config from '@/functions/config'
import '@/styles/index.css'
import PropTypes from 'prop-types'
import {DefaultSeo} from 'next-seo'

export default function App({Component, pageProps}) {
  return (
    <>
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
