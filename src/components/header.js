import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import "./header.css"
import fbIcon from '../images/facebook-icon.png'

// import logo from "../images/veggie-med-cheeses-logo.png"

class Header extends React.Component {
  state = {
    visible: false,
  }

  showMobileMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <header>
        <section className="mobile-nav">
          <Link to="/">
            {" "}
            <a href="https://www.facebook.com/vitinnovavitinnova/"><img src={fbIcon} /></a>
          
          </Link>
          {this.state.visible ? (
            <div onClick={this.showMobileMenu} className="burger-icon-close">
              <span>X</span>
            </div>
          ) : (
            <div onClick={this.showMobileMenu} className="burger-icon-open">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </section>

        {this.state.visible ? (
          <nav className="mobile-menu">
            <ul>
              <li>
                <LocalizedLink to="/">Home</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/il-progetto">Il progetto</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/innovazione">Innovazione</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/team">Team</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/news">News</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/contatti">Contatti</LocalizedLink>
              </li>
            </ul>
          </nav>
        ) : (
          <p></p>
        )}

        <nav className="desktop-menu">
          <ul>
            <li>
              <LocalizedLink to="/">Home</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/il-progetto">Il progetto</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/innovazione">Innovazione</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/team">Team</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/news">News</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/contatti">Contatti</LocalizedLink>
            </li>
          </ul>
          <LocalizedLink to="/">
          <a href="https://www.facebook.com/vitinnovavitinnova/"><img src={fbIcon} style={{position: 'relative', top: '5px'}}/></a>
          </LocalizedLink>
        </nav>
      </header>
    )
  }
}

export default Header
