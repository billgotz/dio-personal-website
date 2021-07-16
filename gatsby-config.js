module.exports = {
  siteMetadata: {
    title: `Dionisis Gotzagiannis`,
    //TODO write description
    description: `Personal website of Dionisis Gkotzagiannis. Graphic Designer | Web Designer | 3D Artist | Photoshop Artist`,
    author: `@billgotz`,
    siteUrl: `https://dio.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dionisis Gkotzagiannis Personal Website`,
        short_name: `dio personal`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
