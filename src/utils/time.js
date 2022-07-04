const getTrackDuration = t => {
  const secs = Number(t)

  if (!secs) return null

  const h = Math.floor(secs / 3600)
  const m = Math.floor(secs % 3600 / 60)

  const hDisplay = h > 0 ? h + "h" : ""
  const mDisplay = m > 0 ? m + "'" : ""

  return [hDisplay, mDisplay].join(' ')
}
const timeUtils = {
  getTrackDuration
}

export default timeUtils;