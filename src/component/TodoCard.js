import React from 'react'

 function TodoCard ({el}) {
  return (
    <div>
        
  <p>{el.description}</p>
  <button> delete </button>
  <button> edit </button>
  <button> checked</button>



    </div>
  )
}
export default TodoCard