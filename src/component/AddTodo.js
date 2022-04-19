import React,{useState} from 'react'

 function Add ({toDo,settoDo}) {
   const [newTask,setNewTask]= useState("")
   const handlesubmit=()=>{
  
    let newTaskkkk ={
        description : newTask ,
        id: Math.random()}

    settoDo([...toDo ,newTaskkkk])
    console.log(newTaskkkk)
  }
  return (
    <div>
<input placeholder='add new to do task ' onChange={e=>setNewTask(e.target.value)}/> 
    <button onClick={handlesubmit}> Add </button>

    </div>
  )
}
export default Add