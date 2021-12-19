import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login';
import Personal from '../views/Personal';

Vue.use(VueRouter)

    const routes = [
        {
            path: '/',
            name: 'Login',
            component: Login
        },{
            path:'/personal',
            name:'personal',
            component: Personal
        }
    ]

// eslint-disable-next-line no-undef
const router = new VueRouter({
    routes
})

export default router