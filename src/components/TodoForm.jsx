import React, { useState } from 'react'
import { ulid } from 'ulid';

export const TodoForm = ({todoList, setTodoList}) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: ulid(),
        text: inputText,
        completed: false
      }
    ])
    setInputText("")
    // console.log(inputText)
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className='todoForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo' onChange={handleChange} value={inputText}/>
        <button>+</button>
      </form>
    </div>
  )
}
