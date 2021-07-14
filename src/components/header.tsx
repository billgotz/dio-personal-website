import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Socials from "./socials"

const Header = () => (
  <header className="p-12 z-50">
    <div className="flex flex-row justify-between">
      <h1 className="m-0">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            width={45}
            quality={100}
            alt="Dionisis Gkotzagiannis"
          />
        </Link>
      </h1>

      <ul className="flex flex-row justify-center items-center gap-x-8">
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <Socials />
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
