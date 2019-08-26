const convert = require('convert-excel-to-json')
const chalk = require('chalk')
const fs = require('fs')

const saveToFile = (name, json) => {
  fs.writeFile(
    `./src/data/${name}/data.json`,
    JSON.stringify({ [name]: json }, '', '  '),
    err => {
      if (err) {
        console.log(chalk.red(err.message))
        process.exit(1)
      }
      console.log(chalk.green(`✅  file saved: ${name}`))
    }
  )
}

const result = convert({
  sourceFile: './data.xlsx',
  header: {
    rows: 1,
  },
  sheets: [
    {
      name: 'sponsors',
      columnToKey: {
        A: 'name',
        B: 'url',
        C: 'slug',
      },
    },
    {
      name: 'sessions',
      columnToKey: {
        A: 'place',
        B: 'timetable',
        C: 'title',
        D: 'abstract',
        E: 'meta',
        F: 'speakers',
        G: 'hashtag',
        H: 'enquete',
      },
    },
    {
      name: 'speakers',
      columnToKey: {
        A: 'id',
        B: 'name',
        C: 'affiliation',
        D: 'profile',
      },
    },
  ],
})

const { sponsors, sessions, speakers } = result

saveToFile('sponsors', sponsors)

const findById = xs => id => xs.find(x => String(x.id) === String(id))

const findSpeakersById = findById(speakers)

const normalizedSessions = sessions
  .filter(session => session.timetable !== '選択')
  .reduce((acc, session) => {
    console.log(session)
    const speakers =
      typeof session.speakers === 'string'
        ? session.speakers.split(',')
        : [session.speakers.toString()]
    acc.push({
      ...session,
      speakers: session.speakers
        .toString()
        .split(',')
        .map(findSpeakersById),
    })
    return acc
  }, [])

saveToFile('sessions', normalizedSessions)
