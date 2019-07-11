import React from "react";
import "./style.scss";

export default function Banner(props) {
  return (
    <div className="banner section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns is-10">
              <p className="logo" />
              <h1 className="title">SPRING FEST 2019</h1>
            </div>
          </div>
        </div>
        <div className="columns informations">
          <div className="column is-8 is-offset-1">
            <div className="columns is-8">
              <p>
                Spring
                FrameworkはJavaの代表的なアプリケーションフレームワークであり、登場した2002年より現在に至るまで世界中の多くのJavaアプリケーションで利用されています。
                国内でも広く利用されておりますが、ユーザ間での情報交換・交流の場を提供し、さらなるSpring
                Frameworkの認知度の向上、普及促進を図るため、本カンファレンスを開催いたします。
              </p>
            </div>
          </div>
        </div>
        <div className="columns informations">
          <div className="column is-4 is-offset-1">
            <div className="columns is-4">
              <div className="info">
                <p className="label">会場</p>
                <p className="content">御茶ノ水ソラシティ</p>
                <a
                  className="link"
                  href="https://goo.gl/maps/HDmKL8haVvbAnZMc8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="map-link" viewBox="0 0 24 24">
                    <path
                      fill="#FFF"
                      d="M15.5,4.5C15.5,5.06 15.7,5.54 16.08,5.93C16.45,6.32 16.92,6.5 17.5,6.5C18.05,6.5 18.5,6.32 18.91,5.93C19.3,5.54 19.5,5.06 19.5,4.5C19.5,3.97 19.3,3.5 18.89,3.09C18.5,2.69 18,2.5 17.5,2.5C16.95,2.5 16.5,2.69 16.1,3.09C15.71,3.5 15.5,3.97 15.5,4.5M22,4.5C22,5.5 21.61,6.69 20.86,8.06C20.11,9.44 19.36,10.56 18.61,11.44L17.5,12.75C17.14,12.38 16.72,11.89 16.22,11.3C15.72,10.7 15.05,9.67 14.23,8.2C13.4,6.73 13,5.5 13,4.5C13,3.25 13.42,2.19 14.3,1.31C15.17,0.44 16.23,0 17.5,0C18.73,0 19.8,0.44 20.67,1.31C21.55,2.19 22,3.25 22,4.5M21,11.58V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H11.2C11.08,3.63 11,4.13 11,4.5C11,5.69 11.44,7.09 12.28,8.7C13.13,10.3 13.84,11.5 14.41,12.21C15,12.95 15.53,13.58 16.03,14.11L17.5,15.7L19,14.11C20.27,12.5 20.94,11.64 21,11.58M9,14.5V15.89H11.25C11,17 10.25,17.53 9,17.53C8.31,17.53 7.73,17.28 7.27,16.78C6.8,16.28 6.56,15.69 6.56,15C6.56,14.31 6.8,13.72 7.27,13.22C7.73,12.72 8.31,12.47 9,12.47C9.66,12.47 10.19,12.67 10.59,13.08L11.67,12.05C10.92,11.36 10.05,11 9.05,11H9C7.91,11 6.97,11.41 6.19,12.19C5.41,12.97 5,13.91 5,15C5,16.09 5.41,17.03 6.19,17.81C6.97,18.59 7.91,19 9,19C10.16,19 11.09,18.63 11.79,17.91C12.5,17.19 12.84,16.25 12.84,15.09C12.84,14.81 12.83,14.61 12.8,14.5H9Z"
                    />
                  </svg>
                  <span>東京都千代田区神田駿河台4-6</span>
                </a>
                <p className="description">
                  JR 中央・総武線「御茶ノ水」駅 聖橋口から徒歩 1 分
                </p>
                <p className="description">
                  東京メトロ千代田線「新御茶ノ水」駅 B2 出口[直結]
                </p>
                <p className="description">
                  東京メトロ丸ノ内線「御茶ノ水」駅 出口 1 から徒歩 4分
                </p>
                <p className="description">
                  都営地下鉄新宿線「小川町」駅 B3 出口から徒歩 6 分
                </p>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="columns is-3">
              <div className="info">
                <p className="label">日程</p>
                <p className="content">2019.12.18 (Wed)</p>
                <p className="content opening-period">9:00-18:30</p>
              </div>
            </div>
          </div>
          <div className="column is-2">
            <div className="columns is-2">
              <div className="info">
                <p className="label">運営</p>
                <p className="content">JSUG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns sns">
          <div className="column is-2 is-offset-1 padding-right">
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
          <div className="column is-2">
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
  );
}
