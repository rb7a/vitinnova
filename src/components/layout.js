import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import CookieBanner from './cookieBanner'
import './layout.css'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({ children, locale, data, dataHeader, titleFooter, subtitleFooter }) => { // accesss data"
  return (
    <LocaleProvider value={locale}>
      <>
        <Header data={data} locale={locale} dataHeader={dataHeader} />

        <main>{children}</main>

        <Footer titleFooter={titleFooter} subtitleFooter={subtitleFooter} />
        <CookieBanner />
      </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

export default Layout
