const { findById, normalizeSessions } = require('../../tools/convert/fns')

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
          place: 'sola city Hall WEST',
          timetable: '10:00 - 10:45',
          title: '基調講演',
          abstract: ' ',
          meta: 'meta 1, meta 2, meta 3',
          speakers: '1,2',
        },
        {
          place: 'sola city Hall EAST',
          timetable: '11:00 - 11:45',
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
      const expected = [
        {
          place: 'sola city Hall WEST',
          timetable: '10:00 - 10:45',
          title: '基調講演',
          abstract: ' ',
          meta: 'meta 1, meta 2, meta 3',
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
          place: 'sola city Hall EAST',
          timetable: '11:00 - 11:45',
          title: '登壇者一人',
          abstract: '一人でしゃべる',
          meta: 'For Beginner',
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

      const actual = normalizeSessions(sessions, speakers)

      expect(actual).toEqual(expected)
    })
  })
})
