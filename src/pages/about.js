import React from "react"
import Layout from "../components/layout"
import * as contactStyle from "../components/contact.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Currently I'm an Electrical Undergrad student at
        <a href="https://www.iiti.ac.in/" target="_blank" className={contactStyle.link}> IIT Indore
        </a>
        . Who is interested in SDE work.
      </p>
    </Layout>
  )
}
export default AboutPage
