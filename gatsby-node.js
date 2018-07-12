const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

/* inject additional fields into nodes */
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = boundActionCreators
    const slug = createFilePath({
      // create a reference to the node's filepath
      node,
      getNode,
      basePath: 'posts' // defined in config
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`
    })
  }
}

/* create routes and statically inject context data into templates */
exports.createPages = ({ graphql, boundActionCreators }) => {
  const singlePostTemplate = path.resolve('./src/templates/single-post.js')
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors)
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: singlePostTemplate,
          context: {
            slug: node.fields.slug
          }
        })
      })
    })
    resolve()
  })
}
