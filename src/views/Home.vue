<template>
	<div class="home">
		<div class="error" v-if="error">
			<p class='errorDisplay'>{{ error }}</p>
			<button class='cancelError' @click.prevent='resetError'>&times;</button>
		</div>
		<form @submit.prevent='addTodo' class='addTodoForm'>
			<input class='addTodoInput' type="text" placeholder='Add New Todo' v-model='newTodo'>
			<button class='addTodoButton' type="submit" @click.prevent='addTodo'>Add</button>
		</form>
		<h4>TODOS</h4>
		<ul class='todoList'>
			<li v-for='todo in todos' :key='todo.task' class='todoItem'>
				<input type="checkbox" class='todoDone' v-model='todo.done' @change='updateTodo(todo)'>
				<div class="todoDetails">
					<p class='todoTask' :class="{'strike-through': todo.done}">{{ todo.task }}</p>
					<span class='todoDate'>
						<span>Created: {{ todo.created.toDateString() }}</span>
						<span v-if='todo.updated' style='margin-left:8px;'>Updated: {{ todo.updated.toDateString() }}</span>
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import useTodos from '@/usecases/useTodos'
export default {
	name: 'Home',
	setup(){
		const {
			newTodo,
			error,
			todos,
			addTodo,
			updateTodo,
			hasError,
			resetError
		} = useTodos()

		return {
			newTodo,
			error,
			todos,
			addTodo,
			updateTodo,
			hasError,
			resetError
		}
	}
}
</script>

<style>
	.home{
		padding: 25px;
	}
	h4{
		font-weight: lighter;
		color: #444444;
		text-align: left;
		margin: 50px 0 20px;
	}
	.todoList{
		list-style: none;
		padding-left: 0;
	}
	.todoItem{
		margin: 10px 0px;
		padding: 10px;
		border: 1px solid black;
		border-radius: 4px;
		display: flex;
		align-items: center;
	}
	.todoItem .todoDone{
		margin-right: 10px;
		width: 20px;
		height: 20px;
	}
	.todoItem .todoDetails{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.todoItem .todoDetails .todoTask{
		text-align: left;
		font-size: 1.1rem;
		text-transform: capitalize;
		margin: 0 0 4px;
	}
	.todoItem .todoDetails .todoDate{
		font-size: 0.75rem;
		font-weight: lighter;
		text-align: left;
	}
	.addTodoForm{
		display: flex;
		margin-left: auto;
		margin-right: auto;
		justify-content: space-between;
	}
	.addTodoForm .addTodoInput{
		width: 50%;
		padding: 5px 15px;
		border-radius: 8px;
		border: 1px solid #111;
		flex-grow: 3;
	}
	.addTodoForm .addTodoButton{
		padding: 10px 40px;
		margin-left: 20px;
		background: #22dd55;
		border: 1px solid #008833;
		color: #fefefe;
		border-radius: 8px;
	}
	.error{
		background: #dd2244;
		color: #fefefe;
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 0 20px;
		border-radius: 8px;
	}
	.error .cancelError{
		border: none;
		font-size: 1.5rem;
		font-weight: bold;
		background: inherit;
		color: inherit;
	}
	.strike-through{
		text-decoration: line-through;
	}
</style>
