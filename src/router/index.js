import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'src/components/Home.vue'
import ExpensesMain from 'src/components/pages/DailyExpenses.vue'
import Login from 'src/components/pages/Login.vue'
import SignUp from 'src/components/pages/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/expenses',
    name: 'Expenses Main',
    component: ExpensesMain
  },
  {
    path: '/signUp',
    name: 'Sign up',
    component: SignUp
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  routes
})