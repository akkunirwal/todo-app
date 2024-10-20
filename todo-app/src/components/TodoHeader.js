import './Todo.scss';
import cx from 'classnames';

export default function TodoHeader({ settodoData: setTodoData, itemSearched, filterSelected }) {

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
			<h3>Today</h3>
			<input type='text' placeholder="Search" value={itemSearched} onChange={handleSearch} />
			<div className="filter-buttons">
				<button name='all' className={cx({ "back-green": filterSelected === 'all' })} onClick={filterList}>All</button>
				<button name='completed' className={cx({ "back-green": filterSelected === 'completed' })} onClick={filterList}>Completed</button>
				<button name='incomplete' className={cx({ "back-green": filterSelected === 'incomplete' })} onClick={filterList}>Incomplete</button>
			</div>
		</div>
	)
}
