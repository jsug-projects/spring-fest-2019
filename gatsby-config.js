module.exports = {
  siteMetadata: {
    title: `Spring Fest 19`,
    description: `Spring FrameworkはJavaの代表的なアプリケーションフレームワークであり、世界中の多くのJavaアプリケーションで利用されています。ユーザ間での情報交換・交流の場を提供し、さらなるSpring Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。`,
    author: `JSUG`,
    image: `https://s3-ap-northeast-1.amazonaws.com/springfest2019.springframework.jp/images/springfest2019.jpg`,
    url: `https://springfest2019.springframework.jp/`,
    event: {
      venue: '御茶ノ水ソラシティ',
      address: '〒101-0062 東京都千代田区神田駿河台 4-6',
      traffic: [
        {
          station: '御茶ノ水駅',
          line: 'JR 中央線・総武線',
          description: '聖橋口から徒歩1分',
        },
        {
          station: '新御茶ノ水駅',
          line: '東京メトロ 千代田線',
          description: 'B2出口直結',
        },
        {
          station: '御茶ノ水駅',
          line: '東京メトロ 丸ノ内線',
          description: '出口1から徒歩4分',
        },
        {
          station: '小川町駅',
          line: '都営地下鉄 新宿線',
          description: 'B3出口から徒歩6分',
        },
      ],
      hall: [
        {
          floor: '1F',
          room: [
            {
              name: 'Room B',
            },
            {
              name: 'Room C',
            },
          ],
        },
        {
          floor: '2F',
          room: [
            {
              name: 'Booth',
            },
            {
              name: 'sola City Hall East',
            },
            {
              name: 'sola City Hall West',
            },
            {
              name: 'Terrace Room',
            },
          ],
        },
      ],
      latlng: {
        lat: 35.698672,
        lng: 139.766433,
      },
      date: 'December 18th, Wed',
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
        icon: `src/data/images/favicon-32x32.png`, // This path is relative to the root of the site.
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
