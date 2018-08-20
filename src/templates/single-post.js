import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FlexContainer from '../components/flex-container'
import { TcifButtonExternal, TcifColors, IFancyLink } from '../data/app-style'

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
    ${IFancyLink};
  }
  blockquote {
    -moz-margin-after: 1rem;
    -webkit-margin-after: 1rem;
    -webkit-margin-end: 0;
    flex-basis: 100%;
    margin-left: 0 !important;
    margin-top: -1rem;
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    width: 100%;
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
const SinglePostNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  a.button,
  button {
    text-decoration: none;
    border: none;
    outline: none;
  }
  a.button:active,
  button:active {
    outline: none;
  }
  ${TcifButtonExternal} {
    margin: 0.9rem 0 0.25rem;
    z-index: 10;
  }
  @media (max-width: 960px) {
    flex-direction: row;
    justify-content: center;
    ${TcifButtonExternal} {
      margin: 0 0.1rem 0.5rem;
    }
  }
`
const Title = styled.h1`
  margin-bottom: 0 !important;
`
class SinglePost extends Component {
  static propTypes = { data: PropTypes.object.isRequired }

  constructor(props) {
    super(props)
    this.tweet = `https://twitter.com/intent/tweet?hashtags=TryCodingItsFun&related=webdev&text=`
  }

  componentDidMount() {
    this.tweet =
      typeof window !== `undefined`
        ? (this.tweet += window.location.href)
        : null
  }

  render() {
    const { data } = this.props
    return (
      <FlexContainer
        renderMain={() => (
          <Post>
            <Title>{data.markdownRemark.frontmatter.title}</Title>
            <small>
              {data.markdownRemark.frontmatter.date}
              {` `}
              by
              {` `}
              <span style={{ fontWeight: `bolder`, color: `#444` }}>
                {data.markdownRemark.frontmatter.author}
              </span>
            </small>
            <Body
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <span id="secret" style={{ display: `none` }}>
              {`If you think pineapple doesn't belong on pizza, you're wrong. Don't @ me.`}
            </span>
          </Post>
        )}
        renderSidebar={() => (
          <SinglePostNav>
            <TcifButtonExternal
              fill={TcifColors.tcifBlue}
              color="tcifGray"
              href={this.tweet}>
              share on twitter
            </TcifButtonExternal>
          </SinglePostNav>
        )}
      />
    )
  }
}

export default SinglePost

/* eslint-disable no-undef */
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
