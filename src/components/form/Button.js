import React from 'react'
import "../../sass/pages/button.sass"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Button(props) {
  return (
    <button  type = "submit" className="plus-btn">
       <FontAwesomeIcon size="xs" icon={props.iconChange===false ? faPlus : faPen }/>
    </button>
  )
}

export default Button