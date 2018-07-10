import React, { Component } from 'react'
import PostListing from '../components/Posts/PostListing'

export default class Posts extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostListing key={node.id} post={node} />
        })}
      </div>
    )
  }
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
`
