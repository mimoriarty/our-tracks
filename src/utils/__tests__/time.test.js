import timeUtils from "../time"

test("getTrackDurations returns proper human readable strings", () => {
  expect(timeUtils.getTrackDuration(3600)).toBe("1h")
  expect(timeUtils.getTrackDuration(14560)).toBe("4h 2'")
  expect(timeUtils.getTrackDuration(100)).toBe("1'")
  expect(timeUtils.getTrackDuration()).toBeNull()
  expect(timeUtils.getTrackDuration({})).toBeNull()
  expect(timeUtils.getTrackDuration("foo")).toBeNull()
})
