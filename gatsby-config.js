module.exports = {
  siteMetadata: {
    title: `Spring Fest 2019`,
    description: `Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。 国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。`,
    author: `JSUG`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'spring-fest-2019',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
