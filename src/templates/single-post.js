import React from 'react'
import FlexContainer from '../components/flex-container'
import styled from 'styled-components'

const Post = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  small {
    color: #9a86ee;
  }
`
const Body = styled.div`
  margin-top: 0.5rem;
`
const Title = styled.h1`
  margin-bottom: 0 !important;
`
const SinglePost = ({ data }) => {
  return (
    <FlexContainer
      renderMain={() => (
        <Post>
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <small>{data.markdownRemark.frontmatter.date}</small>
          <Body
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }}
          />
        </Post>
      )}
      renderSidebar={() => "Share this post (...soon. This feature's in the works!)"}
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
