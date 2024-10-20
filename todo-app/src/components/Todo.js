import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';
import TodoHeader from './TodoHeader';

let initialData = {
	todoItems: [{
		id: 1,
		name: "Buy milk",
		done: false
	}],
	itemId: 1,
	filterSelected: 'all',
	itemSearched: ""
}

function Todo() {
	const [todoData, setTodoData] = useState(() => {
		const storedData = localStorage.getItem('todoData');
		return storedData ? JSON.parse(storedData) : initialData;
	});

	useEffect(() => {
		localStorage.setItem('todoData', JSON.stringify(todoData));
	}, [todoData])

	return (
		<>
			<TodoHeader itemSearched={todoData.itemSearched} settodoData={setTodoData} />
			<TodoList todoData={todoData} settodoData={setTodoData} />
			<AddTodoItem todoData={todoData} settodoData={setTodoData} />
		</>
	)
}

export default Todo