import React from 'react'
import TodoCard from './TodoCard'

 function Todolist({toDo}) {
  return (
    <div>
     {
       toDo.map(el=><TodoCard el={el}/>)
     }





    </div>
  )
}

export default Todolist