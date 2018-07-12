import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <Link to={post.fields.slug}>
      <h3>{post.frontmatter.title}</h3>
    </Link>
    <p>{post.excerpt}</p>
    <small>{post.frontmatter.date}</small>
  </article>
)

export default PostListing
