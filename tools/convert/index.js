const convert = require('convert-excel-to-json')
const chalk = require('chalk')
const fs = require('fs')

const { findById, normalizeSessions } = require('./fns')

const saveToFile = (name, json) => {
  fs.writeFile(
    `./src/data/${name}.json`,
    JSON.stringify(json, '', '  '),
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
        G: 'slides',
        H: 'hashtag',
        I: 'enquete',
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
saveToFile('sessions', normalizeSessions(sessions, speakers))
