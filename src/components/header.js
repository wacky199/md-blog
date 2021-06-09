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
    <header className={headerStyles.heading}>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <NavBar />
      </div>
    </header>
  )
}
export default Header
