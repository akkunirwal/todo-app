import React from 'react'

export default function TodoHeader({ settodoData: setTodoData, itemSearched }) {

	function filterList(event) {
		setTodoData((prevState) => ({ ...prevState, filterSelected: event.target.name }))
	}

	// function debounce(fn, delay) {
	// 	let timeoutId;
	// 	return function (...args) {
	// 		clearTimeout(timeoutId);
	// 		timeoutId = setTimeout(() => {
	// 			fn(...args);
	// 		}, delay);
	// 	}
	// }

	function handleSearch(event) {
		setTodoData((prevState) => ({ ...prevState, itemSearched: event.target.value }))
	}

	return (
		<div className="header-container">
			<span>Today</span>
			<input type='text' value={itemSearched} onChange={handleSearch} />
			<button name='all' onClick={filterList}>All</button>
			<button name='completed' onClick={filterList}>Completed</button>
			<button name='incomplete' onClick={filterList}>Incomplete</button>
		</div>
	)
}
