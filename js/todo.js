const TODOITEM = 'todos'
const todoForm = document.querySelector("form#todo-form");
const todoContent = document.querySelector("input[name='todo-content']");
const todoList = document.querySelector("#todo-list");

let todos = JSON.parse(localStorage.getItem(TODOITEM))
todos = todos ? todos : []


const appendLi = (saved) =>{
	const li = document.createElement("li");
	li.innerHTML=`
		<div class='${saved.checked ? 'checked' : '' }'>
			<input type="checkbox" ${saved.checked ? 'checked' : '' }  value='${saved.id}'/>
			<span>${saved.text}</span>
		</div>
		<button class="delete-btn" value=${saved.id}>X</button>
	`
	
	li.querySelector('button').addEventListener('click', removeLi)
	li.querySelector('input').addEventListener('click', checkLi)

	todoList.appendChild(li)
}
const checkLi = (e)=>{
	todos = todos.map(todo =>{
		if(todo.id == e.target.value)
			todo.checked = !todo.checked
		return todo
	})
	e.target.parentElement.classList.toggle('checked')
	localStorage.setItem(TODOITEM, JSON.stringify(todos))
}

const removeLi = (e)=>{
	todos = todos.filter(todo =>{
		return todo.id != e.target.value
	})
	localStorage.setItem(TODOITEM, JSON.stringify(todos))
	e.target.parentElement.remove();

}

todos.forEach(todo =>{
	appendLi(todo)
})


const saveTodos = (value)=>{
	todos.push({text: value, id: todos.length + 1, checked:false})
	localStorage.setItem(TODOITEM, JSON.stringify(todos))
	return todos[todos.length - 1]
}



const submitTodo= (e)=>{
	e.preventDefault();
	const saved = saveTodos(todoContent.value)
	appendLi(saved)

	todoContent.value = ""
}

todoForm.addEventListener("submit", submitTodo);
