const findById = xs => id => xs.find(x => String(x.id) === String(id))

const findBySlug = xs => slug => xs.find(x => x.slug === slug)

const split = v => {
  return typeof v === 'string' ? v.split(',').map(s => s.trim()) : [v]
}

const safeGetProp = (k, o) => o[k] || ''

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
          ? split(session.speakers)
              .map(findSpeakersById)
              .map(s => ({ ...s, image: `images/speakers/${s.id}.png` }))
          : [],
      })
      return acc
    }, [])
}

const normalizeBooth = (booths, sponsors) => {
  const findSponsorsBySlug = findBySlug(sponsors)

  return booths.reduce((acc, booth) => {
    const sponsor = findSponsorsBySlug(booth.sponsor)

    if (!sponsor) {
      return acc
    }

    acc.push({
      sponsor: {
        name: safeGetProp('name', sponsor),
        url: safeGetProp('url', sponsor),
        slug: safeGetProp('slug', sponsor),
        profile: safeGetProp('profile', sponsor),
        image: `images/companies/${sponsor.slug}.png`,
      },
      title: safeGetProp('title', booth),
      description: safeGetProp('description', booth),
    })
    return acc
  }, [])
}

const normalizeCompanies = sponsors => {
  return sponsors.map(s => ({
    ...s,
    image: `images/companies/${s.slug}.png`,
  }))
}

module.exports = {
  findById,
  normalizeSessions,
  normalizeBooth,
  normalizeCompanies,
}
