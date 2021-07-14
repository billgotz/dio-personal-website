import React from "react"
import { IoConstructSharp } from "@react-icons/all-files/io5/IoConstructSharp"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function Work() {
  return (
    <Layout>
      <div className="text-center pt-40 flex flex-col justify-center items-center gap-y-8">
        <IoConstructSharp className="text-5xl mx-auto text-yellow-500" />
        <h1 className="text-7xl text-yellow-500">Under Construction...</h1>
        <p>This page will hold my work. Come back later.</p>
        <Link
          to="/"
          className="font-bold border-b-2 max-w-max hover:border-black"
        >
          Back to home
        </Link>
      </div>
    </Layout>
  )
}
