import React from 'react'
import './style.scss'

export default function Banner(props) {
  return (
    <div className="banner section">
      <div className="container">
        <div className="logo" />
        <h1 className="title has-text-centered">SPRING FEST 2019</h1>
        <div className="columns">
          <div className="column is-10 is-offset-1  ">
            <p className="description">
              Spring
              FrameworkはJavaの代表的なアプリケーションフレームワークであり、登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。
              国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、さらなるSpring
              Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。
            </p>
          </div>
        </div>
        <div className="columns informations">
          <div className="column is-3 is-offset-1">
            <div className="info">
              <p className="label">運営</p>
              <p className="content">JSUG</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="info">
              <p className="label">会場</p>
              <p className="content">御茶ノ水ソラシティ</p>
            </div>
          </div>
          <div className="column is-4">
            <div className="info">
              <p className="label">日程</p>
              <p className="content">2019.12.18 (Wed)</p>
            </div>
          </div>
        </div>
        <div className="columns sns">
          <div className="column is-2 is-offset-4 has-text-centered">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-show-count="false"
              data-text="SPRING FEST 2019 in 12.18 at Ochanomizu Solacity"
              data-url="http://springfest2019.springframework.jp"
              data-lang="ja"
              data-size="large"
            >
              Tweet
            </a>
          </div>
          <div className="column is-2 has-text-centered">
            <div
              className="fb-share-button"
              data-href="http://springfest2019.springframework.jp"
              data-layout="button"
              data-size="large"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fspringfest2019.springframework.jp%2F&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
                rel="noopener noreferrer"
              >
                シェア
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
