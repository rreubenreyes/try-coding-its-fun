import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostPreview = styled.div`
  margin-bottom: 2rem;
  small {
    color: #9a86ee;
  }
`
const PostLink = styled(Link)`
  color: #444;
  font-size: 1.78rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #444;
  }
`
const PostExcerpt = styled.p`
  margin-bottom: auto;
`
const PostListing = ({ post }) => (
  <PostPreview>
    <PostLink to={post.fields.slug}>{post.frontmatter.title}</PostLink>
    <PostExcerpt>{post.excerpt}</PostExcerpt>
    <small>{post.frontmatter.date}</small>
  </PostPreview>
)

export default PostListing
