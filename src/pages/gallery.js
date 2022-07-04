import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// fonts
import "@fontsource/Inter/200.css"

// styles
import { galleryContainer, imageLabel, imageDate } from "./gallery.module.css"

const Gallery = ({ data }) => {
  const { allImageSharp, galleryJson } = data
  const galleryItems = allImageSharp.nodes.map((item, key) => {
    const image = getImage(item)
    const imageData = galleryJson.data.find(dataObj => item.fixed.originalName.includes(dataObj.image))

    return (
      <li key={key}>
        <GatsbyImage image={image} alt="track"/>
        <p className={imageLabel}>"{imageData.label}"</p>
        <p className={imageDate}>{imageData.created}</p>
      </li>
    )
  })
  return (
    <Layout back={true}>
      <ul className={galleryContainer}>{galleryItems}</ul>
    </Layout>
  )
}

export const data = graphql`
  {
    allImageSharp(
      filter: { fixed: { originalName: { regex: "/gallery_/" } } }
    ) {
      nodes {
        gatsbyImageData
        fixed {
          originalName
        }
      }
    }
    galleryJson {
      data {
        created(formatString: "MMMM D, YYYY")
        image
        label
      }
    }
  }
`

export default Gallery
