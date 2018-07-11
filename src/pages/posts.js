import React, { Component } from 'react'
<<<<<<< HEAD
import PostListing from '../components/PostListing'
=======
import PostListing from '../components/Posts/PostListing'
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371

export default class Posts extends Component {
  constructor(props) {
    super(props)
  }
<<<<<<< HEAD

=======
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371
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
<<<<<<< HEAD
  query AllPostsQuery {
=======
  query PostsQuery {
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
<<<<<<< HEAD
          excerpt
          fields {
            slug
          }
=======
          html
          excerpt
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371
        }
      }
    }
  }
`
