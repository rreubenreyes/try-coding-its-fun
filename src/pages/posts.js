import React, { Component } from 'react'
import PostDirectory from '../components/Posts/PostDirectory'

export default class Posts extends Component {
    constructor( props ) {
        super( props )
    }
    render() {
        return (
            <div>
                { this.props.data.allMarkdownRemark.edges.map( 
                    ({ node }) => {
                        return <PostDirectory 
                            key={ node.id } 
                            post={ node }
                        />
                    }
                ) }
            </div>
        )
    }
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark {
      edges {
        node {
            id
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