import React from 'react'
import FlexContainer from '../components/flex-container'
import styled from 'styled-components'
import { TcifColors } from '../data/app-style'

const Post = styled.div`
  p {
    margin-bottom: 1rem;
  }
`
const Body = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
  text-align: left;
  width: 100%;
  a {
    display: inline-block;
    position: relative;
    color: ${TcifColors.tcifPurple};
    text-decoration: none;
    width: auto;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0 !important;
    }
    &:after {
      display: block;
      position: relative;
      top: 0.25rem;
      border-bottom: 1px solid #979797;
      content: '';
      margin-top: ${props => (props.isHeader ? '-0.125rem' : '-0.25rem')};
      margin-bottom: ${props => (props.isHeader ? '0.25rem' : 0)};
      transform: scaleX(0);
      transform-origin: 0% 50%;
      transition: transform 0.2s;
      transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
      width: 100%;
    }
    &:hover:after {
      position: relative;
      transform: scaleX(1);
      width: 100%;
    }
  }
  blockquote {
    flex-basis: 100%;
    text-align: center;
    margin-top: -1rem;
  }
  pre {
    display: flex;
    flex-basis: 100%;
  }
  img {
    height: auto;
    width: 100%;
    margin-bottom: 0 !important;
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
          <small>
            {data.markdownRemark.frontmatter.date} by{' '}
            <span style={{ fontWeight: 'bolder', color: '#444' }}>
              {data.markdownRemark.frontmatter.author}
            </span>
          </small>
          <Body dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
        author
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
