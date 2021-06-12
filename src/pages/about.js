import React from "react"
import Layout from "../components/layout"
import * as contactStyle from "../components/contact.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Hello, my name is Shivam, currently I'm an Undergrad student in
        Electrical deptt. at{" "}
        <a
          href="https://www.iiti.ac.in/"
          target="_blank"
          className={contactStyle.link}
        >
          IIT Indore
        </a>
        . Apart from my electrical courses I'm really interested in Coding and SDE related works. Right now I'm trying to dive deep into REACT and related frameworks.
      </p>
    </Layout>
  )
}
export default AboutPage
