import Vue from 'vue'
import App from './App.vue'

/* vue-routerの追加 */
import router from './router'

/* font awesomeの読み込み */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* css読み込み */
import './assets/scss/style.scss'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
