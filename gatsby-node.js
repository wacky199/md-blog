require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const res = await graphql(`
    query {
      allContentfulWackyPortfolio {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulWackyPortfolio.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

}
