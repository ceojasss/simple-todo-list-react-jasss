import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        addTodo(value);

        setValue("")

    }
    
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='What is the task ?' 
            value={value} onChange={(e) => setValue(e.target.value) } />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm