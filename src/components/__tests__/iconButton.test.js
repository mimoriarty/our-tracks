import IconButton from "../iconButton"
import * as React from "react"
import { render } from "@testing-library/react"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"


test("IconButton renders expected component", () => {
  const item = {
    icon: faNewspaper,
    label: "Bar",
    url: "/foo",
    color: "green",
  }
  const { getByTestId } = render(<IconButton {...item} />)
  const element = getByTestId("button-icon")
  
  expect(element).toHaveTextContent("Bar")
  expect(element).toHaveAttribute("href", "/foo")
  expect(element).toContainHTML("data-icon", "newspaper")
  expect(element).toHaveClass("button greenButton")
})

test("IconButton renders default color class", () => {
  const item = {
    icon: faNewspaper,
    label: "Advice",
    url: "/caring",
  }
  const { getByTestId } = render(<IconButton {...item} />)

  expect(getByTestId("button-icon")).toHaveClass("button whiteButton")
})
