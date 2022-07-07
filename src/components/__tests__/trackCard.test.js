import TrackCard from "../trackCard"
import * as React from "react"
import { render } from "@testing-library/react"

test("TrackCard renders expected default component", () => {
  const { getByTestId } = render(
    <TrackCard />
  )
  const trackCardElement = getByTestId("trackCard")

  expect(trackCardElement).toContainHTML("ul", "svg")
  expect(trackCardElement).toHaveClass("mainContainer")
})
