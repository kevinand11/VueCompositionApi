import { computed, reactive } from 'vue'

export default () => {
	let error = reactive({
		message: '',
		timer: null,
	})
	let errorMessage = computed(() => !!error.message)
	let setError = (message) => {
		error.message = message
		error.timer = setTimeout(resetError, 8000)
	}
	let resetError = () => {
		clearTimeout(error.timer)
		error.message = ''
		error.timer = null
	}

	return {
		error: errorMessage,
		setError,
		resetError,
	}
}
