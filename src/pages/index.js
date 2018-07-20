import React, { Component } from 'react'
import PostListing from '../components/post-listing'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const SidebarContainer = styled.div`
  flex-basis: 25vw;
  flex-grow: 1;
  font-family: 'Quicksand', sans-serif;
  text-align: right;
  @media (max-width: 960px) {
    flex-basis: 100vw;
    margin-bottom: 3rem;
    text-align: center;
  }
`
const PostsContainer = styled.div`
  flex-grow: 1;
`
const Divider = styled.div`
  position: relative;
  background-color: #979797;
  flex-basis: 1px;
  flex-grow: 1;
  font-size: 5px;
  height: auto;
  margin: 0 2rem;
  @media (max-width: 960px) {
    display: none;
  }
`
export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ContentWrapper>
        <SidebarContainer>
          {'A blog about the climb of self-taught devs, by a self-taught dev.'}
        </SidebarContainer>
        <Divider>{'.'}</Divider>
        <PostsContainer>
          {this.props.data.allMarkdownRemark.edges.map(({ node }) => {
            return <PostListing key={node.id} post={node} />
          })}
        </PostsContainer>
      </ContentWrapper>
    )
  }
}

export const query = graphql`
  query FrontPagePostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
