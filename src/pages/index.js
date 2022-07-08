import * as React from "react"
import { graphql } from "gatsby"
import IconButton from "../components/iconButton"

// fonts
import "@fontsource/inter"
import "@fontsource/sarina"

// styles
import {
  faCompass,
  faNewspaper,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons"
import { buttonContainer } from "./index.module.css"

// templates
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const defaultButtons = [
    {
      icon: faNewspaper,
      label: "Advice",
      url: "/caring",
      color: "green",
    },
    {
      icon: faPhotoFilm,
      label: "Gallery",
      url: "/gallery",
      color: "orange",
    },
  ]
  const TracksButtons = data.allTracksJson.nodes.map(track => ({
    icon: faCompass,
    label: track.formattedName,
    url: `../track/${track.slug}`,
    color: "white",
  }))

  return (
    <Layout help={true}>
      <ul className={buttonContainer}>
        {[...TracksButtons, ...defaultButtons].map((item, key) => (
          <li key={key}>
            <IconButton {...item} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const tracksContents = graphql`
  {
    allTracksJson(sort: { fields: created, order: DESC }, limit: 4) {
      nodes {
        created(formatString: "MMMM D, YYYY")
        formattedName
        id
        slug
      }
    }
  }
`

export default IndexPage
