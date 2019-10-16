import React from "react"

import { rhythm } from "../utils/typography"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div
      style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        >
        <Header title={title} location={location}/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.netlify.com">Netlify</a>
        </footer>
      </div>
    )
  }
}

export default Layout
