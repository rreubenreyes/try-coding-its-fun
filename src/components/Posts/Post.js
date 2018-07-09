import React from 'react'

const Post = props => (   
    <article>
        <h1>{ props.post.frontmatter.title }</h1>
        <span>{ props.post.frontmatter.date }</span>
        <div
            dangerouslySetInnerHTML={{
                __html: props.post.html
            }}
        />
    </article>
)

export default Post
