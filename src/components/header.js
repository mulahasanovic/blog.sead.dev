import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"

class Header extends React.Component {
  render() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let content

    if (location.pathname === rootPath) {
      content = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Bio />
        </div>
      )
    } else {
      content = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <header>
        { content }
      </header>
    )
  }
}

export default Header