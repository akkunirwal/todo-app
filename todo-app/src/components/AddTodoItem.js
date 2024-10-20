import React, { useState } from 'react'

export default function AddTodoItem({ todoData, settodoData }) {
	const [todoItem, setTodoItem] = useState({});


	function addTodoItem(event) {
		if (!todoItem?.name?.trim()) {
			alert('Please enter a todo item name');
			return;
		}
		settodoData((prevData) => ({ ...prevData, todoItems: [...prevData.todoItems, todoItem], itemId: prevData.itemId + 1 }));
		setTodoItem({});
		console.log(todoData);
	}

	function handleAddTask(event) {
		setTodoItem({ id: todoData.itemId + 1, name: event.target.value, done: false });
	}

	return (
		<div className='add-task-container'>
			<input type='text' placeholder='Type Something' className='add-input' onChange={handleAddTask} value={todoItem.name ?? ""} />
			<button onClick={addTodoItem} className='add-task-button'>Add Task</button>
		</div>
	)
}
