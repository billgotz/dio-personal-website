import { Link } from "gatsby"
import React from "react"
import Socials from "./socials"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-40">
      <Link
        to="/contact"
        className="text-6xl font-bold border-b hover:border-black"
      >
        Get in Touch.
      </Link>
      <Link to="/work" className="text-6xl font-bold border-b">
        My Work
      </Link>
      <ul className="flex flex-row gap-4 text-2xl">
        <Socials />
      </ul>
    </div>
  )
}
