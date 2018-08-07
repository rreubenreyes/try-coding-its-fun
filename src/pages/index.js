import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'
import PostListing from '../components/post-listing'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    const filtered = this.props.filtered
      ? this.props.filtered.split(' ').map(word => {
          return word ? new RegExp(word, 'gi') : null
        })
      : ''
    const posts = data
      .filter(({ node }) => {
        return filtered ? filtered.some(word => node.frontmatter.title.search(word) !== -1) : true
      })
      .map(({ node }) => {
        return <PostListing key={node.id} post={node} />
      })
    return (
      <FlexContainer
        renderMain={() => {
          return posts.length ? (
            posts
          ) : (
            <span
              className="nomatch--mobile-centered"
              style={{
                display: `flex`,
                fontFamily: `'Quicksand', sans-serif`,
                fontSize: `1rem`,
                fontStyle: `italic`
              }}>
              {`Couldn't find anything matching your search. :(`}
            </span>
          )
        }}
        renderSidebar={() => <h4>A blog about loving what you code.</h4>}
      />
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
            author
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
