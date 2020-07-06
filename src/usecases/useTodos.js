import { computed, reactive, ref } from '@vue/composition-api'
import { useStore } from '@/usecases/useStore'
import useError from '@/usecases/useError'

export default () => {
	let store = useStore()
	let { setError, resetError, error } = useError()
	store.dispatch(
		'todo/setTodos',
		reactive([
			{
				task: "Try out Vue's new composition API",
				done: true,
				created: new Date(1594063133779),
				updated: new Date(1594063133779),
			},
			{
				task: 'Implement tests in ongoing project',
				done: false,
				created: new Date(1594063133779),
			},
			{
				task: 'Catchup on clean architecture videos',
				done: false,
				created: new Date(1594063133779),
			},
		])
	)
	let todos = store.state.todo.todos

	let newTodo = ref('')

	let addTodo = () => {
		let task = newTodo.value
		if (!task) {
			return setError('Task details is required')
		}
		if (todos.find((todo) => todo.task.toLowerCase() === task.toLowerCase())) {
			return setError('Task already exist')
		}
		let todo = { task, done: false, created: new Date() }
		newTodo.value = ''
		return store.dispatch('todo/addTodo', todo)
	}
	return {
		newTodo,
		todos,
		addTodo,
		error,
		resetError,
	}
}
