import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulWackyPortfolio(slug: { eq: $slug }) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            fixed(width: 560) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
const Blog = props => {
  const post = props.data.contentfulWackyPortfolio.body

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = "test"
        const url = props.data.contentfulWackyPortfolio.body.references[0].fixed.src
        return <img src={url} alt={alt} />
      },
    },
  }

  return (
    <Layout>
    <Head title={props.data.contentfulWackyPortfolio.title}/>
      <h2>{props.data.contentfulWackyPortfolio.title}</h2>
      <h5>{props.data.contentfulWackyPortfolio.publishedDate}</h5>
      {renderRichText(post,options)}
    </Layout>
  )
} 
export default Blog

      