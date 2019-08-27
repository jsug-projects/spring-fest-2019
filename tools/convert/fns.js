const findById = xs => id => xs.find(x => String(x.id) === String(id))
const split = v => {
  return typeof v === 'string' ? v.split(',').map(s => s.trim()) : [v]
}

const normalizeSessions = (sessions, speakers) => {
  const findSpeakersById = findById(speakers)
  return sessions
    .filter(session => session.timetable !== '')
    .reduce((acc, session) => {
      const slides = split(session.slides)
      acc.push({
        ...session,
        slides,
        meta: split(session.meta),
        speakers: split(session.speakers).map(findSpeakersById),
      })
      return acc
    }, [])
}

module.exports = {
  findById,
  normalizeSessions,
}
