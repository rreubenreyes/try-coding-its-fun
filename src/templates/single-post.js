import React from 'react'
import Link from 'gatsby-link'

const SinglePost = ({ data }) => {
  return (
    <div>
      <small>{data.markdownRemark.frontmatter.date}</small>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}
      />
      <Link to="/posts/">
        <small>Back to index</small>
      </Link>
    </div>
  )
}

export default SinglePost
export const query = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
