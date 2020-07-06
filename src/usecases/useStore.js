import { provide, inject } from '@vue/composition-api'
import store from '@/store/'

let storeKey = 'set'

export const provideStore = () => {
	provide(storeKey, store)
}

export const useStore = () => {
	const storeInstance = inject(storeKey)
	if (!storeInstance) throw Error('No store registered')
	return storeInstance
}
