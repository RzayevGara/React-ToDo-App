import React from 'react'
import "../../sass/pages/clear.sass"

function Clear(props) {
  return (
    <p onClick={props.clear} className="clear-btn">Clear All</p>
  )
}

export default Clear