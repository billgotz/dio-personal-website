import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaVimeoV } from "@react-icons/all-files/fa/FaVimeoV"
import { FaLink } from "@react-icons/all-files/fa/FaLink"

export default function Socials() {
  return (
    <>
      <li>
        <a href="mailto:gkotzagiannhs.dion.le@gmail.com">
          <FaLink />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaInstagram />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/dionisis-gotzagiannis/">
          <FaLinkedinIn />
        </a>
      </li>

      <li>
        <a href="https://www.behance.net/dio-G">
          <FaBehance />
        </a>
      </li>

      <li>
        <a href="https://dribbble.com/_Dee">
          <FaDribbble />
        </a>
      </li>

      <li>
        <a href="https://vimeo.com/user53571977">
          <FaVimeoV />
        </a>
      </li>
    </>
  )
}
