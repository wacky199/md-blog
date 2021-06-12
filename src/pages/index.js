import React from "react"
import Layout from "../components/layout"
import * as contactStyle from "../components/contact.module.scss"
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <p>Welcome to MD-Blogs-GATSBYjs,</p>
      <p>
        From the name only, you might have guessed some features of this site.
        If not, let me tell you,
      </p>
      <p>
        this site is build upon{" "}
        <a
          href="https://www.gatsbyjs.com/why-gatsby/"
          target="_blank"
          rel="noreferrer"
          className={contactStyle.link}
        >
          Gatsby
        </a>
        . You may ask why gatsby? not React? or Next? or basic HTML/CSS? Well
        answer is very simple, Gatsby enables developers to build fast, secure,
        and powerful websites using a React-based framework and innovative data
        layer that makes integrating different content, APIs, and services into
        one web experience incredibly simple.
      </p>
      <p>
        site is developed such a way that it is able to render normal MarkDown
        files (MD) and also the file related to CMS (here I've taken use of
        contentful), right now only one type of file can be rendered i.e.
        contenful file.
      </p>
      <p>
        In the course of time, I'll try to give this site more functionality,
        for now it is just basic project for me to understand gatsby.
      </p>
      <h4>Thanks</h4>
    </Layout>
  )
}

export default IndexPage
