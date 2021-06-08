import React from "react"
import Footer from "./footer"
import Header from "./header"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
