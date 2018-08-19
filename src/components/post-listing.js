import { TcifLink } from '../data/app-style'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const PostPreview = styled.div`
  margin-bottom: 1.5rem;
`
const PostExcerpt = styled.p`
  margin-bottom: 0.5rem;
`
const PostImgPreview = styled(Img)`
  -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 0.5rem;
`
const PostListing = ({ post }) => (
  <PostPreview>
    <TcifLink isHeader={true} to={post.fields.slug}>
      <h2>{post.frontmatter.title}</h2>
    </TcifLink>
    <PostExcerpt>{post.excerpt}</PostExcerpt>
    <small>
      <Link to={post.fields.slug}>
        <PostImgPreview sizes={post.frontmatter.thumbnail.childImageSharp.sizes} />
      </Link>
      {post.frontmatter.date} by{' '}
      <span style={{ fontWeight: 'bolder', color: '#444' }}>{post.frontmatter.author}</span>
    </small>
  </PostPreview>
)

export default PostListing
