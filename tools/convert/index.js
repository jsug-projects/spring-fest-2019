const convert = require('convert-excel-to-json')
const chalk = require('chalk')
const fs = require('fs')

const {
  findById,
  normalizeSessions,
  normalizeBooth,
  normalizeCompanies,
} = require('./fns')

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
      name: 'companies',
      columnToKey: {
        A: 'name',
        B: 'url',
        C: 'slug',
        D: 'profile',
        E: 'sponsoring',
      },
    },
    {
      name: 'sessions',
      columnToKey: {
        A: 'timetable',
        B: 'title',
        C: 'abstract',
        D: 'meta',
        E: 'speakers',
        F: 'slides',
        G: 'hashtag',
        H: 'enquete',
        I: 'lunch',
      },
    },
    {
      name: 'booth',
      columnToKey: {
        A: 'sponsor',
        B: 'title',
        C: 'description',
      },
    },
    {
      name: 'timetable',
      columnToKey: {
        A: 'id',
        B: 'time',
        C: 'place',
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

const { companies, sessions, booth, timetable, speakers } = result

saveToFile('companies', normalizeCompanies(companies))
saveToFile('booth', normalizeBooth(booth, companies))
saveToFile('timetable', timetable)
saveToFile('sessions', normalizeSessions(sessions, timetable, speakers))
