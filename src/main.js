import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

new Vue({
    store,
    router,
    render: h => h(App),
    el: '#app',
})