import React from 'react'

const SinglePost = ({ data }) => {
  return (
    <div>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.date}</p>
    </div>
  )
}

export default SinglePost
export const query = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { regex: $slug } }) {
      frontmatter {
        title
        datedate(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
