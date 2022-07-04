import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// fonts
import "@fontsource/Inter/200.css"

// styles
import { linkText, mainText } from "./caring.module.css"

const Caring = () => {
  return (
    <Layout back={true}>
      <section>
        <p className={mainText}>Created with Gatsby and React</p>
        <p className={mainText}>version 1.0.0.</p>
        <Link
          to="https://opensource.org/licenses/CDDL-1.0"
          className={linkText}
        >
          Common Development and Distribution License 1.0
        </Link>
      </section>
    </Layout>
  )
}

export default Caring
