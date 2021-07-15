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
      <div className="p-40 inline-flex flex-col gap-12 h-screen">
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

      <div className="bg-gray-900 rounded grid grid-cols-2 px-12 py-10">
        <div className="p-10 text-white grid grid-cols-2 justify-items-center items-baseline">
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

        <div className="p-10 text-white grid grid-cols-2 justify-items-center items-baseline">
          <h3 className="about-headings font-bold text-xl leading-headings border-b border-white">
            Recognition
          </h3>
          <a href="99designs.com/" className="underline show-img">
            Nominee for <span>Best Print Design 2021</span> by 99Designs Awards
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
