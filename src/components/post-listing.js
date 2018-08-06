import { TcifLink } from '../data/app-style'
import React from 'react'
import styled from 'styled-components'

const PostPreview = styled.div`
  margin-bottom: 1.5rem;
`
const PostExcerpt = styled.p`
  margin-bottom: auto;
`
const PostListing = ({ post }) => (
  <PostPreview>
    <TcifLink isHeader={true} to={post.fields.slug}>
      <h2>{post.frontmatter.title}</h2>
    </TcifLink>
    <PostExcerpt>{post.excerpt}</PostExcerpt>
    <small>
      {post.frontmatter.date} by{' '}
      <span style={{ fontWeight: 'bolder', color: '#444' }}>{post.frontmatter.author}</span>
    </small>
  </PostPreview>
)

export default PostListing
