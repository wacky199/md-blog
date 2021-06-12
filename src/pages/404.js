import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"
import * as contactStyle from "../components/contact.module.scss"

const NotFound = () => {
    return (
      <Layout>
      <Head title="404"/>
        <h1>Page not Found</h1>
        <p>
          <Link className={contactStyle.link} to="/">Head Home</Link>
        </p>
      </Layout>
    ) 
}

export default NotFound
