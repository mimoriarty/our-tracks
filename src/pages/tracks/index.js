import * as React from "react"
import { graphql, Link } from "gatsby"

import TrackCard from "../../components/trackCard"
import Layout from "../../components/layout"

// fonts
import "@fontsource/Inter/300.css"

// styles
import { sectionContainer, sectionTitle } from "./index.module.css"

const TracksPage = ({ data }) => {
  return (
    <Layout back={true}>
      <div className={sectionContainer}>
        <h2 className={sectionTitle}>Tracks</h2>
        <ul>
          {data.allTracksJson.nodes.map((node, k) => {
            const image = data.allImageSharp.nodes.find(({gatsbyImageData}) => gatsbyImageData.images.fallback.src.includes(node.image.src)) 

            return <li key={k}><Link to={`../track/${node.slug}`} state={{ from: "/tracks" }}><TrackCard num={k+1} {...node} image={image} /></Link></li>
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    allTracksJson(sort: {fields: created, order: DESC}) {
      nodes {
        created(formatString: "MMMM D, YYYY")
        formattedName
          id
          slug
          descriptionShort
          image {
            src
          }
          duration
          distance
          levelUp
          levelDown
      }
    }
    allImageSharp(filter: {fixed: {originalName: {regex: "/track_/"}}}) {
      nodes {
        gatsbyImageData
      }
    }
  }
`

export default TracksPage
