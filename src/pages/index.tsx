import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="p-40 inline-flex flex-col gap-y-8">
      <h1 className="font-bold text-7xl max-w-7xl leading-headings">
        I am a graphic/web designer, 3D and Photoshop artist from Greece.
        Currently working freelance.
      </h1>
      <Link
        to="/contact"
        className="text-5xl max-w-max font-semibold border-b-2 opacity-90 hover:border-black hover:opacity-100"
      >
        contact me
      </Link>{" "}
    </div>
  </Layout>
)

export default IndexPage
