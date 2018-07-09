import React, { Component } from 'react'
import Post from '../components/Posts/Post'

export default class SinglePost extends Component {
    constructor( props ) {
        super( props )
    }
    render() {
        const [ edges, context ] = [ 
            this.props.data.allMarkdownRemark.edges,
            this.props.pathContext
        ]
        const post = edges.filter( edge => {
            return edge.node.fields.slug == context.slug 
        })
            .reduce( post => post )
            .node

        return <Post key={ post.id } post={ post } />
    }
}

export const query = graphql`
  query SinglePostQuery {
    allMarkdownRemark {
      edges {
        node {
            id
            fields {
                slug
            }
            frontmatter {
                title
                date( formatString: "MMMM DD, YYYY" )
            }
            html
            excerpt
        }
      }
    }
  }
`