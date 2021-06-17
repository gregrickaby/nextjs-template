import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className="container space-y-12 max-w-2xl mx-auto p-8 md:px-0 py-8">
      <Header />
      <main className="space-y-8">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}
