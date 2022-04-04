import "../../sass/pages/input.sass"

function Input(props) {
  return (
    <input value={props.valueInp} type="text" placeholder="Add item..."  onChange={props.onChange}/>
  )
}

export default Input