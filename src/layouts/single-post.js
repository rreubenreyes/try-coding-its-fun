<<<<<<< HEAD
import React from 'react'

const SinglePost = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>{data.markdownRemark.frontmatter.title}</p>
    </div>
  )
}

export default SinglePost
export const query = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { regex: $slug } }) {
      frontmatter {
        title
=======
import React, { Component } from 'react'
import Post from '../components/Posts/Post'

export default class SinglePost extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const [edges, context] = [this.props.data.allMarkdownRemark.edges, this.props.pathContext]
    const post = edges
      .filter(edge => {
        return edge.node.fields.slug == context.slug
      })
      .reduce(post => post).node

    return <Post key={post.id} post={post} />
  }
}

export const query = graphql`
  query SinglePostQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
          excerpt
        }
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371
      }
    }
  }
`
