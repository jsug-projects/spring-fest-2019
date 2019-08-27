import React from 'react'
import styled from 'styled-components'

import { Map, Section } from './'

const Container = styled.div``

const Panel = styled.div`
  display: flex;
  align-items: flex-start;
`

const PanelInner = styled.div`
  padding: ${props => props.theme.spacing(0, 4)};
`

const Access = () => {
  return (
    <Container>
      <Section>
        <>
          <h2>Access</h2>
          <Panel>
            <PanelInner>
              <h3>
                御茶ノ水ソラシティ
                <br />
                カンファレンスセンター
              </h3>
              <small>〒101-0062 東京都千代田区神田駿河台 4-6</small>
            </PanelInner>
            <PanelInner>
              <dl>
                <dt>JR 中央線・総武線</dt>
                <dd>御茶ノ水駅 聖橋口から徒歩1分</dd>
                <dt>東京メトロ 千代田線</dt>
                <dd>新御茶ノ水駅 B2出口直結</dd>
                <dt>東京メトロ 丸ノ内線</dt>
                <dd>御茶ノ水駅 出口1から徒歩4分</dd>
                <dt>都営地下鉄 新宿線</dt>
                <dd>小川町駅 B3出口から徒歩6分</dd>
              </dl>
            </PanelInner>
          </Panel>
        </>
      </Section>
      <Map />
    </Container>
  )
}

export default Access
