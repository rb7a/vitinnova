import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({ children, locale, data, titleFooter, subtitleFooter }) => { // accesss data"
  return (
    <LocaleProvider value={locale}>
      <>
        <Header data={data} />

        <main>{children}</main>

        <Footer titleFooter={titleFooter} subtitleFooter={subtitleFooter} />
      </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

export default Layout
