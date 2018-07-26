import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostPreview = styled.div`
  margin-bottom: 1.5rem;
  small {
    color: #9a86ee;
  }
`
const PostLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: #444;
  font-size: 1.45rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-decoration: none;
  width: auto;
  &:after {
    display: block;
    position: relative;
    top: 0.25rem;
    border-bottom: 1px solid #979797;
    content: '';
    margin-top: -0.125rem;
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
