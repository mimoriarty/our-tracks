import Track from "../track"
import * as React from "react"
import { render } from "@testing-library/react"


test("Track renders expected default component", () => {
  const item = {
    pageContext: {
      steps: [{
        name: 'foo',
        additionalData: ['1', '2']
      }, {
        name: 'bar',
        additionalData: ['1', '2']
      }]
    }
  }
  const { getByTestId } = render(
    <Track {...item}/>
  )
  const trackElement = getByTestId("track")

  expect(trackElement).toContainHTML("ul", "h2", "h3")
  expect(trackElement).toHaveClass("trackContainer")
})

test("Track renders expected without steps", () => {
  const item = {
    pageContext: {}
  }
  const { getByTestId } = render(
    <Track {...item}/>
  )
  const trackElement = getByTestId("track")

  expect(trackElement).toContainHTML("ul", "h2")
  expect(trackElement).not.toContainHTML("h3")
  expect(trackElement).toHaveClass("trackContainer")
})
