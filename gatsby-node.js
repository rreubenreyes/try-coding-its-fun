const path = require('path') // node's path library
const { createFilePath } = require('gatsby-source-filesystem')

/* query retrieval hook */
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  /**
   * @param { object }    node
   * @param { object }    getNode
   * @param { object }    boundActionCreators
   */
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = boundActionCreators
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts', // defined as a resolution in plugins
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
  }
}

/* route and dynamic page generation */
exports.createPages = ({ graphql, boundActionCreators }) => {
  const singlePostTemplate = path.resolve('./src/pages/single-post.js')
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // this is an "anonymous query"
    // data from this query is passed to the target component
    // then it goes away
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
          path: node.fields.slug, // define the route
          component: singlePostTemplate, // define the template
          context: {
            // create context
            slug: node.fields.slug,
          },
        })
      })
    })
    resolve()
  })
}
