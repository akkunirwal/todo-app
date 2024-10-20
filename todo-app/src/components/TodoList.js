import React from 'react'

export default function TodoList({ todoData, settodoData }) {

	const { todoItems, filterSelected, itemSearched } = todoData;

	const filteredTasks = todoItems.filter((task) => {
		if (filterSelected === 'completed') {
			return task.done;
		}
		if (filterSelected === 'incomplete') {
			return !task.done;
		}
		return true;
	});

	const searchedTask = filteredTasks.filter((task) => {
		return task.name.toLowerCase().includes(itemSearched.toLowerCase())
	})

	function deleteItem(id) {
		let newList = todoData.todoItems.filter(item => item.id !== id);
		settodoData((prevState) => ({
			...prevState, todoItems: newList
		}));
	}

	function changeTaskStatus(id) {
		let newList = todoData.todoItems.map(item => {
			if (item.id === id) { return { ...item, done: !item.done } }
			else { return item }
		});
		settodoData((prevState) => ({
			...prevState, todoItems: newList
		}));
	}

	return (
		<>
			{
				searchedTask.map((item) => {
					return <div key={item.id}>
						<input type='checkbox' checked={item.done} onChange={() => changeTaskStatus(item.id)} />
						<span>{item.name}</span>
						<button onClick={() => deleteItem(item.id)}>delete item</button>
					</div>
				})
			}
		</>
	)
}
