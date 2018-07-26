import React from 'react'
import Link from 'gatsby-link'
import FlexContainer from '../components/flex-container'
import styled from 'styled-components'

const Post = styled.div`
  * {
    margin: 0;
  }
  small {
    color: #9a86ee;
  }
`
const Body = styled.div`
  margin-top: 0.5rem;
`
const SinglePost = ({ data }) => {
  return (
    <FlexContainer
      renderMain={() => (
        <Post>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <small>{data.markdownRemark.frontmatter.date}</small>
          <Body
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }}
          />
        </Post>
      )}
      renderSidebar={() => 'Share this post'}
    />
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
