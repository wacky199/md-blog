import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
            fixed(width: 500) {
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

  // const options={
  //   renderNode:{[BLOCKS.EMBEDDED_ASSET]:node=> <img src={node.data.target.fixed.src} alt="img"/>}
  // }

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
      <h2>{props.data.contentfulWackyPortfolio.title}</h2>
      <p>{props.data.contentfulWackyPortfolio.publishedDate}</p>
      {/* {documentToReactComponents(post,options)} */}
      {renderRichText(post,options)}
    </Layout>
  )
} 
export default Blog

      // title
      // publishedDate(formatString: "MMMM DD, YYYY")
      // body {
      //   raw
      //   references {
      //     gatsbyImageData
      //   }
      // }

      // const jsonData = JSON.parse(props.data.contentfulWackyPortfolio.body.raw);

  // const options={
  //   renderNode:{
  //     [BLOCKS.EMBEDDED_ASSET]:(node,children)=>(
  //       <img src={`https:${node.data.body.references["gatsbyImageData"].images.fallback.src}`}/>
  //     )
  //   },
  //   renderMark:{},
  // }

  // {
  //   documentToReactComponents({ jsonData })
  // }