import React from 'react'
import Layout from '../components/layout'
import * as contactStyle from '../components/contact.module.scss'
import Head from "../components/head"

const ContactPage=()=>{
    return (
      <Layout>
      <Head title="Contact"/>
        <h1>Contact</h1>
        <p>
          Hello there, if you like the work or have some suggestion, please
          contact at, 
          <a
            className={contactStyle.link}
            rel="noreferrer"
            href="mailto: cvam199@gamil.com"
          >
            {" "}
            cvam199@gmail.com{" "}
          </a>
        </p>
      </Layout>
    )
}

export default ContactPage