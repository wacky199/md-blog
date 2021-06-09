import React from "react"
import Footer from "./footer"
import Header from "./header"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
