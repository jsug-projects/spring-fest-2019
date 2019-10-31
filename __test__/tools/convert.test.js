const {
  findById,
  normalizeSessions,
  normalizeBooth,
} = require('../../tools/convert/fns')

describe('Convert Excel to JSON', () => {
  describe('findById', () => {
    const xs = [
      { id: 1, value: 'data 1' },
      { id: 2, value: 'data 1' },
      { id: 3, value: 'data 1' },
    ]

    it('オブジェクトのリストから指定したIDを持つオブジェクトを取得する', () => {
      const actual = findById(xs)(1)
      expect(actual.id).toBe(1)
    })

    it('見つからなければundefinedを返す', () => {
      const actual = findById(xs)(1000)
      expect(actual).toEqual(undefined)
    })
  })

  describe('normalizeSessions', () => {
    it('sessionとspeakerデータをくっつける', () => {
      const sessions = [
        {
          timetable: 1,
          title: '基調講演',
          abstract: ' ',
          meta: 'meta 1, meta 2, meta 3',
          speakers: '1,2',
        },
        {
          timetable: 2,
          title: '登壇者一人',
          abstract: '一人でしゃべる',
          meta: 'For Beginner',
          speakers: 1,
        },
      ]
      const speakers = [
        {
          id: 1,
          name: '基調太郎',
          affiliation: '株式会社 基調',
          profile: '基調講演をしにきた。',
        },
        {
          id: 2,
          name: 'すぴ 次郎',
          affiliation: '株式会社すぴ',
          profile: 'https://tagbangers.co.jp',
        },
      ]
      const timetables = [
        {
          id: 0,
          time: '9:45 - 10:00',
          place: 'sola city Hall WEST',
        },
        {
          id: 1,
          time: '10:00 - 10:45',
          place: 'sola city Hall WEST',
        },
        {
          id: 2,
          time: '11:00 - 11:45',
          place: 'sola city Hall WEST',
        },
      ]
      const expected = [
        {
          timetable: {
            id: 1,
            time: '10:00 - 10:45',
            place: 'sola city Hall WEST',
          },
          title: '基調講演',
          abstract: ' ',
          meta: ['meta 1', 'meta 2', 'meta 3'],
          speakers: [
            {
              id: 1,
              name: '基調太郎',
              affiliation: '株式会社 基調',
              profile: '基調講演をしにきた。',
            },
            {
              id: 2,
              name: 'すぴ 次郎',
              affiliation: '株式会社すぴ',
              profile: 'https://tagbangers.co.jp',
            },
          ],
        },
        {
          timetable: {
            id: 2,
            time: '11:00 - 11:45',
            place: 'sola city Hall WEST',
          },
          title: '登壇者一人',
          abstract: '一人でしゃべる',
          meta: ['For Beginner'],
          speakers: [
            {
              id: 1,
              name: '基調太郎',
              affiliation: '株式会社 基調',
              profile: '基調講演をしにきた。',
            },
          ],
        },
      ]

      const actual = normalizeSessions(sessions, timetables, speakers)

      expect(actual).toEqual(expected)
    })
  })

  describe('normalizeBooth', () => {
    it('boothとsponsorデータをくっつける', () => {
      const sponsors = [
        {
          name: 'NTT DATA',
          url: 'http://www.nttdata.com/jp',
          slug: 'nttdata',
        },
        {
          name: 'TiO Corporation',
          url: 'http://www.t-i-o.co.jp/',
          slug: 'tio',
          profile:
            '株式会社ティ・アイ・オー＜TIO＞は、刻々と進化しているIT技術を駆使し、各産業分野における基幹業務、金融および製造流通分野における業務アプリケーションに構築からソフトウェア・画面デザイン・メンテナンスにいたる工程をトータル的にサポートしていく企業です。',
        },
        {
          name: 'Pivotal',
          url: 'https://pivotal.io/jp',
          slug: 'pivotal',
        },
      ]
      const booths = [
        {
          sponsor: 'nttdata',
        },
        {
          sponsor: 'tio',
          title: 'For Your Happiness, Pleasure and Satisfaction',
          description: 'ブースの説明です。',
        },
        {
          sponsor: 'pivotal',
        },
        {
          sponsor: 'unknown', // sponsorにいない
        },
      ]

      const expected = [
        {
          sponsor: {
            name: 'NTT DATA',
            url: 'http://www.nttdata.com/jp',
            slug: 'nttdata',
            profile: '',
          },
          title: '',
          description: '',
        },
        {
          sponsor: {
            name: 'TiO Corporation',
            url: 'http://www.t-i-o.co.jp/',
            slug: 'tio',
            profile:
              '株式会社ティ・アイ・オー＜TIO＞は、刻々と進化しているIT技術を駆使し、各産業分野における基幹業務、金融および製造流通分野における業務アプリケーションに構築からソフトウェア・画面デザイン・メンテナンスにいたる工程をトータル的にサポートしていく企業です。',
          },
          title: 'For Your Happiness, Pleasure and Satisfaction',
          description: 'ブースの説明です。',
        },
        {
          sponsor: {
            name: 'Pivotal',
            url: 'https://pivotal.io/jp',
            slug: 'pivotal',
            profile: '',
          },
          title: '',
          description: '',
        },
      ]

      const actual = normalizeBooth(booths, sponsors)
      expect(actual).toEqual(expected)
    })
  })
})
