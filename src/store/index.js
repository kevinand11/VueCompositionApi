import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		todo: {
			state: {
				todos: [],
			},
			actions: {
				setTodos: ({ commit }, todos) => commit('setTodos', todos),
				addTodo: ({ commit }, todo) => commit('addTodo', todo),
				updateTodo: ({ commit }, todo) => commit('updateTodo', todo),
			},
			mutations: {
				setTodos: (state, todos) => (state.todos = todos),
				addTodo: (state, todo) => state.todos.push(todo),
				updateTodo: (state, todo) => {
					let index = state.todos.findIndex((t) => t.task === todo.task)
					state.todos[index] = todo
				},
			},
			namespaced: true,
		},
	},
})
