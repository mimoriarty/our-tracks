import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

// fonts
import "@fontsource/montserrat/600.css"
import "@fontsource/Inter/300.css"
import {
  faCircleQuestion,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons"

// styles
import {
  extraIcon,
  iconLink,
  guideImg,
  mainLogo,
  mainHeader,
  mainContainer,
} from "./layout.module.css"

// svgs
import guideSVG from "../images/guide.svg"

const MenuIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1.5rem;
  justify-content: space-around;
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  width: 1.5rem;
  z-index: 5;

  div {
    background: #f5f5f5;
    border-radius: 5px;
    height: 0.23rem;
    position: relative;
    transform-origin: 1px;
    width: 1.5rem;

    :first-child {
      transition: transform 300ms;
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transition: opacity 300ms;
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :last-child {
      transition: transform 300ms;
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  align-items: center;
  background-color: #026919;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  z-index: 2;

  a {
    color: #f5f5f5;
    font-family: "Inter";
    text-decoration: none;
    transition: color 300ms;

    :hover {
      color: #cdff8c;
    }
  }

  li {
    padding: 1.5rem 0;
  }
`

const Layout = ({ back, backTo, help, children }) => {
  const [nav, showNav] = React.useState(false)
  const backButton = back
  const helpButton = help

  return (
    <div className={mainContainer}>
      {backButton && (
        <Link to={backTo || "/"} className={iconLink}>
          <FontAwesomeIcon
            className={extraIcon}
            icon={faArrowAltCircleLeft}
            size="1x"
          />
        </Link>
      )}
      {helpButton && (
        <Link to="/help" className={iconLink}>
          <FontAwesomeIcon
            className={extraIcon}
            icon={faCircleQuestion}
            size="1x"
          />
        </Link>
      )}
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <img className={guideImg} src={guideSVG} alt="decoration guide" />
      <header className={mainHeader}>
        <StaticImage
          className={mainLogo}
          src="../images/our-track-logo.png"
          alt="our tracks logo"
        />
        <h1>Our Tracks</h1>
      </header>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </MenuLinks>
      {children}
    </div>
  )
}

export default Layout
