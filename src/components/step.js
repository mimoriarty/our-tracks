import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

// fonts
import { faCompass } from "@fortawesome/free-solid-svg-icons"
import "@fontsource/Inter/300.css"

// styles
import {
  compassBadge,
  expandableTitle,
  infoIcon,
  stepContainer,
  stepDescription,
} from "./step.module.css"

const ExpandableContainer = styled.div`
  max-height: ${({ customHide }) => (customHide ? "0px" : "1000px")};
  opacity: ${({ customHide }) => (customHide ? "0" : "1")};
  visibility: ${({ customHide }) => (customHide ? "collapse" : "visible")};
  transition: all 0.3s ease;
`

const Step = props => {
  const additionalElements = props.additionalData.map((data, key) => (
    <li key={key}>{data}</li>
  ))
  const [hidden, setHidden] = React.useState(true)

  return (
    <div className={stepContainer} data-testid="step">
      <button
        type="button"
        className={expandableTitle}
        onClick={() => setHidden(!hidden)}
      >
        <h4>{props.num}. {props.name}</h4>
        <div className={compassBadge}>
          <FontAwesomeIcon className={infoIcon} icon={faCompass} size="1x" />
          <span>{props.compass}</span>
        </div>
      </button>
      <ExpandableContainer customHide={hidden}>
        <p className={stepDescription}>{props.description}</p>
        <ul>{additionalElements}</ul>
      </ExpandableContainer>
    </div>
  )
}

export default Step
