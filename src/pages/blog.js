import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as blogStyles from './blog.module.scss'
import Head from "../components/head"

const BlogPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      allContentfulWackyPortfolio(
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const dataList = data.allContentfulWackyPortfolio.edges

  return (
    <Layout>
    <Head title="Blogs"/>
      <h1>My Blogs</h1>
      <ol className={blogStyles.posts}>
        {dataList.map(edge => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h3>{edge.node.title}</h3>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
export default BlogPage
