import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="p-40 inline-flex flex-col gap-y-8 h-screen">
      <h1 className="font-bold text-8xl max-w-max whitespace-pre-wrap">
        I am a graphic/web designer, 3D
        {"\n"}and Photoshop artist from Greece. Currently working freelance.
      </h1>
      <Link
        to="/contact"
        className="text-5xl max-w-max font-semibold border-b-2 opacity-90 hover:border-black hover:opacity-100"
      >
        contact me
      </Link>{" "}
    </div>

    <div className="bg-gray-900 grid grid-cols-2 mx-20">
      <div className="p-20 text-white grid grid-cols-2 justify-items-center items-baseline gap-8">
        <h3 className="about-headings font-bold text-xl leading-headings">
          Work Experience
        </h3>
        <ul className="flex flex-col gap-4">
          <li>
            Designer <FaArrowRight className="inline" /> 99designs, Freelance,
            since 2016
          </li>
          <li>
            Senior Designer <FaArrowRight className="inline" /> Codex, Ioannina,
            2018-2019
          </li>
          <li>
            Clerk <FaArrowRight className="inline" /> Eglobal Web Cafe,
            Kalamata, 2014
          </li>
        </ul>
      </div>

      <div className="p-20 text-white grid grid-cols-2 justify-items-center items-baseline gap-8">
        <h3 className="about-headings font-bold text-xl leading-headings">
          My CV
        </h3>
        <ul className="flex flex-col gap-4">
          <a href="/cv.pdf">Download</a>
        </ul>
      </div>
      <div className="p-20 text-white grid grid-cols-2 justify-items-center items-baseline">
        <h3 className="about-headings font-bold text-xl leading-headings">
          Recognition
        </h3>
        <a href="99designs.com/">
          Nominee for Best Print Design 2021 by 99Designs Awards
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
