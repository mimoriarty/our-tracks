import * as React from "react"
import Layout from "./layout"
import Step from "./step"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// fonts
import "@fontsource/Inter/300.css"
import {
  faClock,
  faArrowCircleUp,
  faArrowCircleDown,
  faSun,
  faSnowflake,
  faStar,
} from "@fortawesome/free-solid-svg-icons"

// styles
import {
  infoContainer,
  infoIcon,
  ratingBadge,
  stepsContainer,
  trackContainer,
  trackDescription,
  trackTag,
  wheatherBadge,
} from "./track.module.css"

const Track = ({ location, pageContext }) => {
  const stepsItems = pageContext.steps.map((step, key) => <li key={key}><Step num={key+1} {...step}/></li>)

  return (
    <Layout back={true} backTo={location?.state?.from}>
      <div className={trackContainer}>
        <h2>{pageContext.formattedName} ({Math.round(pageContext.distance / 1000)} km)</h2>
        <ul className={infoContainer}>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faClock}
              size="1x"
            />
            <span>55'</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faArrowCircleUp}
              size="1x"
            />
            <span>122</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faArrowCircleDown}
              size="1x"
            />
            <span>55</span>
          </li>
          {
            pageContext.weather &&
            <li className={wheatherBadge}>
              <FontAwesomeIcon
                className={infoIcon}
                icon={pageContext.weather === "hot" ? faSun : faSnowflake}
                size="1x"
              />
              <span>{pageContext.weather}</span>
            </li>
          }
          <li className={ratingBadge}>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faStar}
              size="1x"
            />
            <span>4.5</span>
          </li>
        </ul>
        <p className={trackDescription}>{pageContext.description}</p>
        {stepsItems &&
          <div className={stepsContainer}>
            <h3 className={trackTag}>Steps</h3>
            <ul>{stepsItems}</ul>
          </div>
        }
      </div>
    </Layout>
  )
}

export default Track;