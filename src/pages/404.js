import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"
import * as NotFoundStyles from './404.module.scss'

const NotFound = () => {
    return (
      <Layout>
        <Head title="404" />
        <div className={NotFoundStyles.pagenotfound}>
          <h1>Page not Found</h1>
          <p>
            <Link className={NotFoundStyles.link} to="/">
              Go Back
            </Link>
          </p>
        </div>
      </Layout>
    ) 
}

export default NotFound
