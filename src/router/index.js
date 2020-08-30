import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePages/HomePages.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('../components/Form.vue')
    },
]
console.log(process.env)

const Router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default Router
