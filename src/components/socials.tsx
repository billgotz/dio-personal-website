import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaVimeoV } from "@react-icons/all-files/fa/FaVimeoV"

export default function Socials() {
  const links = [
    // { icon: <FaFacebookF />, href: "https://www.instagram.com/dio.gotz/" },
    // { icon: <FaFacebookF />, href: "https://www.instagram.com/dio.gotz/" },
  ]

  return (
    <>
      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaInstagram />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaLinkedinIn />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaBehance />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaDribbble />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/dio.gotz/">
          <FaVimeoV />
        </a>
      </li>
    </>
  )
}
