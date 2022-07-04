import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// styles
import { button, buttonIcon, whiteButton, greenButton, orangeButton } from "./iconButton.module.css"

const IconButton = props => {
  const colorMapper = {
    green: greenButton,
    orange: orangeButton,
    white: whiteButton,
  }
  const buttonClasses = `${button} ${colorMapper[props.color]}`

  return (
    <Link to={props.url} className={buttonClasses}>
      <FontAwesomeIcon
        className={buttonIcon}
        icon={props.icon}
        size="1x"
      />
      <span>{props.label}</span>
    </Link>
  )
}

export default IconButton