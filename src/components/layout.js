import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({ children, locale, data, titleFooter, subtitleFooter }) => { // accesss data"
  console.log(data, 'fromlayout')
  return (
    <LocaleProvider value={locale}>
      <>
        <Header data={data} />     
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <Footer data={data} />
        </div>
      </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

export default Layout
