import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, extend } from 'vee-validate';



Vue.use(ValidationProvider, extend);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')