import * as React from "react"
import Layout from "../components/layout"
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
  helpContainer,
  helpDescription,
  infoContainer,
  infoIcon,
  trackTag,
} from "./help.module.css"

const Help = () => {
  return (
    <Layout back={true}>
      <section className={helpContainer}>
        <h3 className={trackTag}>Leyend</h3>
        <ul className={infoContainer}>
          <li>
            <FontAwesomeIcon className={infoIcon} icon={faClock} size="1x" />
            <span>Average duration of the proposed path</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faArrowCircleUp}
              size="1x"
            />
            <span>Ascend in meters</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faArrowCircleDown}
              size="1x"
            />
            <span>Descend in meters</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faSun}
              size="1x"
            />
            <span>Spring/Summer recomended track</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faSnowflake}
              size="1x"
            />
            <span>Autum/Winter recomended track</span>
          </li>
          <li>
            <FontAwesomeIcon
              className={infoIcon}
              icon={faStar}
              size="1x"
            />
            <span>User's rating</span>
          </li>
        </ul>
        <h3 className={trackTag}>Steps</h3>
        <p className={helpDescription}>Steps are a guide, not orders. Follow them at your own criteria, all tracks have multiples sidewalks, exits and options, click over the step to read its descriptions and find clues or additional infomation.</p>
      </section>
    </Layout>
  )
}

export default Help
