import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import CookieBanner from "./cookieBanner"
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
        {console.log(!localStorage.getItem("setCookie") )}
        {!localStorage.getItem("setCookie") ? <CookieBanner /> : ''}
      </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

export default Layout
