import Header from "./components/header/Header"
import Form from "./components/form/Form"
import "./sass/pages/app.sass"
import React,{useState, useEffect, useRef} from 'react'
import List from "./components/todoList/List"


// get localStorage
const getLocalItmes = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }else {
    return [];
  }
}

function App() {
  const [items, setItems] = useState(getLocalItmes())
  const [input, setInput] = useState("")
  const [editData, setEditData] = useState(false)
  const value = useRef(0)


  // take input value
  function inputValue(e){
    setInput(e.target.value);
  }  


  //submit 
  function onSubmit(e){
    e.preventDefault()
    const allInputData = { id: new Date().getTime().toString(), name:input, checked: false}
    if(!input){
      alert("You must write something!")
    }else if(editData){
      setItems([...items],[items[value.current].name=input] )
      setEditData(false)
      setInput("")
    }
    else{
      setItems([...items, allInputData]);
      setInput("")
    }
  }
  
  
  // set localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items]);
 
 
 // clear all
  function clearAll(){
    setItems([])
  }
 

 // delete list
  function deleteList(index){
    setItems(
      items.filter((el)=>{
        return index !==el.id
      })
    )
  }

  
  //check list
  function checkList(index){
    if(!items[index].checked){
      setItems([...items],[items[index].checked=true] )
    }else{
      setItems([...items],[items[index].checked=false] )
    }
  }


  // edit list
  function editList(index){
    setInput(items[index].name)
    value.current=index
    setEditData(true)
  }

  return (
    <div className="App">
      <Header/>
      <Form iconChange={editData} clear={clearAll} onChange={inputValue} valueInp={input} submit={onSubmit}/>
      <List checked={checkList} delete={deleteList} edit={editList} todo={items}/>
    </div>
  );
}

export default App;
