module.exports = {
  siteMetadata: {
    title: `Spring Fest 2019`,
    description: `Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。 国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。`,
    author: `JSUG`,
    event: {
      place: '御茶ノ水ソラシティ カンファレンスセンター',
      address: '〒101-0062 東京都千代田区神田駿河台 4-6',
      traffic: [
        {
          name: 'JR 中央線・総武線',
          description: '御茶ノ水駅 聖橋口から徒歩1分',
        },
        { name: '東京メトロ 千代田線', description: '新御茶ノ水駅 B2出口直結' },
        {
          name: '東京メトロ 丸ノ内線',
          description: '御茶ノ水駅 出口1から徒歩4分',
        },
        {
          name: '都営地下鉄 新宿線',
          description: '小川町駅 B3出口から徒歩6分',
        },
      ],
      latlng: {
        lat: 35.698672,
        lng: 139.766433,
      },
      date: '2019-11-11',
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakers`,
        path: `${__dirname}/src/data/images/speakers`,
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
