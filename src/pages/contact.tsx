import React from "react"
import Layout from "../components/layout"
import { headingStyle } from "../components/elementStyles"
export default function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-6xl font-extrabold text-black">
              Contact below or send an{" "}
              <a
                href="mailto:gkotzagiannhs.dion.le@gmail.com"
                className="underline"
              >
                email
              </a>
            </h2>
          </div>
          <form
            className="mt-8 py-8 space-y-6"
            action="https://getform.io/f/6bdacd1a-c34d-48dd-8e88-fb6ab865db46"
            method="POST"
          >
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-black focus:border-black focus:z-10"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-black focus:border-black focus:z-10"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label htmlFor="messageArea" className="sr-only">
                Password
              </label>
              <textarea
                id="messageArea"
                name="message"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-black focus:border-black focus:z-10"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
