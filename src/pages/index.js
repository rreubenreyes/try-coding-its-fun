import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'
import PostListing from '../components/post-listing'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    return (
      <FlexContainer
        renderMain={() => {
          return data.map(({ node }) => {
            return <PostListing key={node.id} post={node} />
          })
        }}
        renderSidebar={() => (
          <h5>A blog about the climb of self-taught devs, by a self-taught dev.</h5>
        )}
      />
    )
  }
}

export const query = graphql`
  query FrontPagePostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
