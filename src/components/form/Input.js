import "../../sass/pages/input.sass"
import React, {useRef, useEffect} from 'react'

function Input(props) {
  const inputRef=useRef()

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <input ref={inputRef} value={props.valueInp} type="text" placeholder="Add item..."  onChange={props.onChange}/>
  )
}

export default Input