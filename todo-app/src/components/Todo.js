import React, { useState } from 'react'

let initialData = [{
	id: "1",
	name: "Buy milk",
	done: false
}]

function Todo() {
	const [todoData, settodoData] = useState(initialData);

	return (
		<>
			<div>Today</div>
			{
				todoData.map((item) => {
					return <div>{item.name}</div>
				})
			}
		</>
	)
}

export default Todo