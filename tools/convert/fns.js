const findById = xs => id => xs.find(x => String(x.id) === String(id))

const normalizeSessions = (sessions, speakers) => {
  const findSpeakersById = findById(speakers)
  return sessions
    .filter(session => session.timetable !== '選択')
    .reduce((acc, session) => {
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
}

module.exports = {
  findById,
  normalizeSessions,
}
