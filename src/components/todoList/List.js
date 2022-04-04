import React from 'react'
import "../../sass/pages/list.sass"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function List(props) {
  return (
    <ul>
        {
          props.todo.map((text,index)=>(
            <li key={text.id} className={text.checked=== true ? "box checked" : "box"}><FontAwesomeIcon onClick={()=>props.checked(index)} className="check-btn" size="lg" icon={faCheck}/>{text.name} <FontAwesomeIcon onClick={()=>props.edit(index)} className="edit-btn" size="1x" icon={faPen}/> <FontAwesomeIcon onClick={()=>props.delete(text.id)} className="close-btn" size="lg" icon={faTimes}/></li>
          ))
        }
    </ul>
  )
}

export default List