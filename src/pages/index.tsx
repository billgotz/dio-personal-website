import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"
import { buttonStyle } from "../components/elementStyles"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="px-40 pb-40 inline-flex flex-col justify-center gap-12 h-screen">
        <h1 className="font-bold text-8xl max-w-max whitespace-pre-wrap">
          I am a graphic/web designer, 3D
          {"\n"}and Photoshop artist from Greece. Currently working freelance.
        </h1>
        <div className="inline-flex gap-24">
          <Link
            to="/contact"
            className={`${buttonStyle} text-4xl font-semibold`}
          >
            contact me
          </Link>{" "}
          <a href="/cv.pdf" className={`${buttonStyle} text-4xl font-semibold`}>
            download cv
          </a>
        </div>
      </div>

      <div className="bg-black bg-waves bg-bottom bg-no-repeat grid grid-cols-1 px-12 py-10 justify-items-center">
        <div className="p-10 text-white grid gap-8 justify-items-center items-baseline">
          <h3 className="about-headings font-bold text-xl leading-headings border-b border-white">
            Work Experience
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              Designer <FaArrowRight className="inline" /> 99designs, Freelance,
              since 2016
            </li>
            <li>
              Senior Designer <FaArrowRight className="inline" /> Codex,
              Ioannina, 2018-2019
            </li>
            <li>
              Clerk <FaArrowRight className="inline" /> Eglobal Web Cafe,
              Kalamata, 2014
            </li>
          </ul>
        </div>

        <div className="p-10 text-white grid gap-8 justify-items-center items-baseline">
          <h3 className="about-headings font-bold text-xl leading-headings border-b border-white">
            Recognition
          </h3>
          <span className="show-img">
            Nominee for{" "}
            <a
              href="https://99designs.com/best-design-awards/2021/best-print-design"
              target="_blank"
              className="underline font-bold"
            >
              Best Print Design 2021
            </a>{" "}
            by 99Designs Awards
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
