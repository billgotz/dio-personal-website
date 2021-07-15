import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="text-center">
      <h1 className="font-bold text-4xl text-gray-800">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <StaticImage
        src="../images/404.png"
        alt="404 error"
        className="max-w-5xl"
      />

      <p>
        Illustration by{" "}
        <a href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34">
          Julia
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
