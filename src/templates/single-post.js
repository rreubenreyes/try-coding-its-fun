import React from 'react'
import FlexContainer from '../components/flex-container'
import styled from 'styled-components'

const Post = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  small {
    color: #9a86ee;
  }
`
const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  margin-top: 0.5rem;
  blockquote {
    flex-basis: 100%;
    text-align: center;
    margin-top: -1rem;
  }
  pre {
    flex-basis: 100%;
  }
  img {
    height: auto;
    width: 100%;
  }
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
          <span id="secret" style={{ display: 'none' }}>
            If you think pineapple doesn't belong on pizza, you're wrong. Don't @ me.
          </span>
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
