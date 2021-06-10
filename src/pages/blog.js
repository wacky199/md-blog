import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const dataList = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>My Blog</h1>
      <p>
        Magna esse velit ipsum exercitation. Et ex cupidatat incididunt veniam
        dolor pariatur irure veniam est velit elit Lorem. Sit officia aliqua
        enim anim et in. Commodo aute deserunt do anim. Id consectetur amet eu
        dolore nisi ea qui. Eiusmod magna elit ad deserunt irure. Amet est
        pariatur ipsum aliqua est veniam sint in. Pariatur veniam sunt ut non
        laborum dolore. Veniam minim occaecat duis minim ut ipsum velit aliquip
        ut culpa. Nulla eu occaecat qui fugiat.
      </p>
      <ol>
        {dataList.map(edge => (
          <li>
            <h3>{edge.node.frontmatter.title}</h3>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
export default BlogPage
