import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { buttonStyle } from "../components/elementStyles"

import Behodler from "../images/work/behodler.png"
import Dissent from "../images/work/dissent.jpg"
import Dogo from "../images/work/dogo.jpg"
import EagleWing from "../images/work/eaglewing.jpg"
import Mirror from "../images/work/mirror.jpg"
import Moverstech from "../images/work/moverstech.jpg"
import Seedify from "../images/work/seedify.jpg"
import Storm from "../images/work/storm.jpg"
import Wakeup from "../images/work/wakeup.jpg"

export default function Work() {
  const works = [
    {
      name: "Behodler",
      type: "Web Design",
      imgUrl: Behodler,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1831591",
    },
    {
      name: "Eagle Wing Productions",
      type: "Web Design",
      imgUrl: EagleWing,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1835962",
    },
    {
      name: "Moverstech CRM",
      type: "Web Design",
      imgUrl: Moverstech,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1724393",
    },
    {
      name: "Seedify.fund",
      type: "Web Design",
      imgUrl: Seedify,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1829107",
    },
    {
      name: "$Dogo",
      type: "Web Design",
      imgUrl: Dogo,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1835596",
    },
    {
      name: "Storm Refrigarators",
      type: "Web Design",
      imgUrl: Storm,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1344390",
    },
    {
      name: "Tower of Dissent",
      type: "Poster",
      imgUrl: Dissent,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1349484",
    },
    {
      name: "Through the shattered mirrors",
      type: "Book Cover",
      imgUrl: Mirror,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1727268",
    },
    {
      name: "The Wake up",
      type: "Book Cover",
      imgUrl: Wakeup,
      imgLink: "https://99designs.com/profiles/beedee1/designs/1491809",
    },
  ]

  return (
    <Layout>
      <Seo title="My work" />
      <div className="text-center flex flex-col justify-center items-center gap-y-8">
        {/* <IoConstructSharp className="text-5xl mx-auto text-yellow-500" />
        <h1 className="text-7xl text-yellow-500">Under Construction...</h1>
        <p>This page will hold my work. Come back later.</p> */}
        <ul className="flex flex-col gap-24 items-start">
          {works.map(work => (
            <li>
              <p className="bg-blue-700 rounded-full max-w-max text-sm p-1 px-2 text-white">
                {work.type}
              </p>
              <a
                href={work.imgLink}
                target="_blank"
                className={`${buttonStyle} link-show text-8xl`}
              >
                {work.name}
              </a>
              <img
                alt={work.name}
                src={work.imgUrl}
                className="img-hide z-50"
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
