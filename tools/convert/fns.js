const findById = xs => id => xs.find(x => String(x.id) === String(id))
const split = v => {
  return typeof v === 'string' ? v.split(',').map(s => s.trim()) : [v]
}

const normalizeSessions = (sessions, timetable, speakers) => {
  const findSpeakersById = findById(speakers)
  const findTimetableById = findById(timetable)
  return sessions
    .filter(session => session.timetable !== '')
    .reduce((acc, session) => {
      acc.push({
        ...session,
        timetable: findTimetableById(session.timetable.toString()),
        meta: session.meta ? split(session.meta) : [],
        speakers: session.speakers
          ? split(session.speakers).map(findSpeakersById)
          : [],
      })
      return acc
    }, [])
}

module.exports = {
  findById,
  normalizeSessions,
}
