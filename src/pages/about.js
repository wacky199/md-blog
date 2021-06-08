import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <h3>
        Currently I'm an Electrical Undergrad student at
        <a href="https://www.iiti.ac.in/" target="_blank">
          {" "}
          IIT Indore
        </a>
        . Who is interested in SDE work.
      </h3>
    </Layout>
  )
}
export default AboutPage
