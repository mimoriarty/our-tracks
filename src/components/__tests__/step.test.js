import Step from "../step"
import * as React from "react"
import { render } from "@testing-library/react"

const item = {
  additionalData: ["foo", "bar"]
}

test("Step renders expected default component", () => {
  const { getByTestId } = render(
    <Step {...item} />
  )
  const stepElement = getByTestId("step")

  expect(stepElement).toContainHTML("button")
  expect(stepElement).toHaveClass("stepContainer")
})
