import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
import Card from '@/Views/Card'
import Course from '@/Views/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thanh-toan',
      name: 'Card',
      component: Card
    },
    {
      path: '/bai-hoc',
      name: 'Course',
      component: Course
    }

  ]
})
