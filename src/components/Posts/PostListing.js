import React from 'react'

const PostListing = ({ post }) => (
	<article>
		<h3>{post.frontmatter.title}</h3>
		<span>{post.frontmatter.date}</span>
		<div>{post.excerpt}</div>
	</article>
)

export default PostListing
