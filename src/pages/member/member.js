import Vue from 'vue'
import Router from 'vue-router'
import member from './components/member.vue'
Vue.use(Router)

let routes = [{
    path: '/',
    component: member
}]

let router = new Router({
    routes
})

new Vue({
    el: '#app',
    router
})