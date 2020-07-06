import Vue from 'vue'
import App from './App.vue'
import router from './router'

import CompositionAPi from '@vue/composition-api'

Vue.use(CompositionAPi)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
