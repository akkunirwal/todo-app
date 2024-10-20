import cx from 'classnames';

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
					return <div key={item.id} className={cx("task-list-container", { 'back-green border-green': item.done })}>
						<div className='d-flex'>
							<div className={cx("custom-checkbox", { 'border-green': item.done })} onClick={() => changeTaskStatus(item.id)}>
								{item.done && <i class="bi bi-check color-green"></i>}
							</div>
							<span>{item.name}</span>
						</div>
						<i class="bi bi-x cross-icon" onClick={() => deleteItem(item.id)}></i>
					</div>
				})
			}
		</>
	)
}
