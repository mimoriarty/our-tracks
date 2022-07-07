import Layout from "../layout"
import * as React from "react"
import { render } from "@testing-library/react"

test("Layout renders expected default component", () => {
  const { getByTestId } = render(<Layout><p>foo</p></Layout> )
  const layoutElement = getByTestId("layout")
  const menuElement = getByTestId("menu")
  
  expect(layoutElement).toContainHTML("img")
  expect(layoutElement).toHaveTextContent("Our TracksHomeTracksGalleryAboutfoo")
  expect(layoutElement).toHaveClass("mainContainer")
  expect(layoutElement).not.toContainHTML("/help")
  expect(menuElement).toContainHTML("ul")
})

test("Layout with help button", () => {
  const { getByTestId } = render(<Layout help={true}><p>foo</p></Layout> )
  const layoutElement = getByTestId("layout")
  
  expect(layoutElement).toContainHTML("/help")
})

test("Layout with back button", () => {
  const { getByTestId } = render(<Layout back={true}><p>foo</p></Layout> )
  const layoutElement = getByTestId("layout")
  
  expect(layoutElement).toContainHTML('href="/"')
})