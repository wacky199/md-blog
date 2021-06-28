import React from "react"
import NavBar from "./navbar"
import { graphql, useStaticQuery } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={headerStyles.heading}>
        <h1>{data.site.siteMetadata.title}</h1>
        <NavBar />
      </div>
  )
}
export default Header
