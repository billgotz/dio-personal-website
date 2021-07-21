/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const scrollRef = React.useRef(null)

  React.useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container data-scroll-section>
      <Header
        data-scroll
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />

      <main data-scroll>{children}</main>
      <Footer />

      <p className="text-center pb-5 whitespace-pre-wrap">
        Copyright © 2021
        {"\n"}
        <small>
          Website created with ❤️ by{" "}
          <a href="https://github.com/billgotz">Vasilis Gkotzagiannis </a>
        </small>
      </p>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
