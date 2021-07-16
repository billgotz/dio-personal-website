import React from "react"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaVimeoV } from "@react-icons/all-files/fa/FaVimeoV"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

export default function Socials() {
  return (
    <>
      <li>
        <a href="mailto:gkotzagiannhs.dion.le@gmail.com" target="_blank">
          <FaEnvelope />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/" target="_blank">
          <FaInstagram />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/dionisis-gotzagiannis/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </li>

      <li>
        <a href="https://www.behance.net/dio-G" target="_blank">
          <FaBehance />
        </a>
      </li>

      <li>
        <a href="https://dribbble.com/_Dee" target="_blank">
          <FaDribbble />
        </a>
      </li>

      <li>
        <a href="https://vimeo.com/user53571977" target="_blank">
          <FaVimeoV />
        </a>
      </li>
    </>
  )
}
