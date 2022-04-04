import React from 'react'
import Input from "./Input"
import Button from "./Button"
import Clear from "./Clear"
import "../../sass/pages/form.sass"

function Form(props) {
  return (
    <form onSubmit={props.submit} className="lists">
        <Input valueInp={props.valueInp} onChange={props.onChange}/>
        <Button iconChange={props.iconChange}/>
        <Clear clear={props.clear}/>
    </form>
  )
}

export default Form