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
      }
    }
  }
`
