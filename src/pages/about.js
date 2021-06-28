import React from "react"
import Layout from "../components/layout"
import * as contactStyle from "../components/contact.module.scss"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <div className={contactStyle.container}>
        <p>
          Hello, my name is Shivam, currently I'm an Undergrad student in
          Electrical deptt. at{" "}
          <a
            href="https://www.iiti.ac.in/"
            target="_blank"
            rel="noreferrer"
            className={contactStyle.link}
          >
            IIT Indore
          </a>
          . Apart from my electrical courses I'm really interested in Coding and
          SDE related works. Right now I'm trying to dive deep into REACT and
          related frameworks.
        </p>
      </div>
    </Layout>
  )
}
export default AboutPage
