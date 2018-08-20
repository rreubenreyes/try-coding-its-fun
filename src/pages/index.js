import React from 'react'
import PropTypes from 'prop-types'
import FlexContainer from '../components/flex-container'
import PostListing from '../components/post-listing'

const IndexPage = (props) => {
  const data = props.data.allMarkdownRemark.edges
  const { filtered } = props
    ? props.filtered.split(` `).map(word => (word ? new RegExp(word, `gi`) : null))
    : ``
  const posts = data
    .filter(
      ({ node }) => (filtered ? filtered.some(word => node.frontmatter.title.search(word) !== -1) : true),
    )
    .map(({ node }) => <PostListing key={node.id} post={node} />)
  return (
    <FlexContainer
      renderMain={() => (posts.length ? (
        posts
      ) : (
        <span
          className="nomatch--mobile-centered"
          style={{
            display: `flex`,
            fontFamily: `'Quicksand', sans-serif`,
            fontSize: `1rem`,
            fontStyle: `italic`,
          }}
        >
          {`Couldn't find anything matching your search. :(`}
        </span>
      ))
      }
      renderSidebar={() => (
        <h4>
          {`A blog about loving what you code.`}
        </h4>
      )}
    />
  )
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  filtered: PropTypes.string.isRequired,
}
export default IndexPage

/* eslint-disable no-undef */
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
            thumbnail {
              id
              childImageSharp {
                id
                sizes(maxHeight: 250) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
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
