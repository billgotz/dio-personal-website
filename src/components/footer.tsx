import { Link } from "gatsby"
import React from "react"
import Socials from "./socials"
import { buttonStyle } from "./elementStyles"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 py-20">
      <div className="flex flex-col justify-center items-center gap-12 py-10">
        <Link to="/contact" className={`${buttonStyle} text-6xl font-bold `}>
          Get in Touch.
        </Link>
        <Link to="/work" className={`${buttonStyle} text-6xl font-bold`}>
          My Work
        </Link>
      </div>
      <ul className="flex flex-row gap-8 text-2xl">
        <Socials />
      </ul>
    </div>
  )
}
