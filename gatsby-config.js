module.exports = {
  siteMetadata: {
    title: "Try Coding, It's Fun",
    desc: 'A blog about the climb of self-taught developers, by a climbing self-taught developer.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/static/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`
      }
    }
  ]
}
