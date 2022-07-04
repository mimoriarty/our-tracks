import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//utils
import timeUtils from "../utils/time"

// fonts
import "@fontsource/Inter/200.css"
import {
  faClock,
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons"

// styles
import {
  cardContainer,
  cardContent,
  cardText,
  infoContainer,
  infoIcon,
  mainContainer,
  minimapImg,
  num,
  numContainer,
} from "./trackCard.module.css"

const TrackCard = props => {
  const trackDuration = timeUtils.getTrackDuration(props.duration)
  const image = getImage(props.image)

  return (
    <div className={mainContainer}>
      <div className={numContainer}>
        <span className={num}>{props.num}</span>
      </div>
      <div className={cardContainer}>
        <h3>{props.formattedName}</h3>
        <div className={cardContent}>
          <div>
            <p className={cardText}>{props.descriptionShort}</p>
            <ul className={infoContainer}>
              {trackDuration && (
                <li>
                  <FontAwesomeIcon
                    className={infoIcon}
                    icon={faClock}
                    size="1x"
                  />
                  <span>{trackDuration}</span>
                </li>
              )}
              <li>
                <FontAwesomeIcon
                  className={infoIcon}
                  icon={faArrowCircleUp}
                  size="1x"
                />
                <span>{props.levelUp}</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className={infoIcon}
                  icon={faArrowCircleDown}
                  size="1x"
                />
                <span>{props.levelDown}</span>
              </li>
            </ul>
          </div>
         <GatsbyImage className={minimapImg} image={image} alt="track minimap"/>
        </div>
      </div>
    </div>
  )
}

export default TrackCard
