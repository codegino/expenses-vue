import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'src/components/Home.vue'
import ExpensesMain from 'src/components/pages/AllExpenses.vue'
import MonthlyView from 'src/components/pages/MonthlyView.vue'
import Login from 'src/components/pages/Login.vue'
import SignUp from 'src/components/pages/Signup.vue'
import ManageData from 'src/components/pages/ManageData.vue'

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
    path: '/monthlyView',
    name: 'Monthly View',
    component: MonthlyView
  },
  {
    path: '/signUp',
    name: 'Sign up',
    component: SignUp
  },
  {
    path: '/manageData',
    name: 'Manage Data',
    component: ManageData
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  routes
})
