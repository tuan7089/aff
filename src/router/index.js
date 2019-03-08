import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
// import Card from '@/Views/Card'
import Course from '@/Views/Course'
import Login from '@/Views/Login'
import Signup from '@/Views/Signup'
import AboutCourse from '@/Views/AboutCourse'
import RegistrationGuide from '@/Views/RegistrationGuide'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/dang-ky',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/dang-nhap',
      name: 'Login',
      component: Login
    },

    // HOme
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/hoc-kiem-tien-online',
      name: 'AboutCourse',
      component: AboutCourse
    },

    {
      path: '/huong-dan',
      name: 'RegistrationGuide',
      component: RegistrationGuide
    },
    // End Home

    {
      path: '/thanh-toan',
      name: 'Card',
      component: () => import(/* webpackChunkName: "Card" */ '@/Views/Card')
    },
    {
      path: '/bai-hoc',
      name: 'Course',
      component: Course
    }


  ]
})

// router.beforeEach((to, from, next) => {
//   const currenUser = firebase.auth().currentUser
//   const requireAuth = to.matched.some(record => record.meta.requireAuth)

//   console.log(currenUser)
//   console.log(requireAuth)
//   if(requireAuth && !currenUser) {
//     console.log('Next 1')
//     next('dang-nhap')
//   }
//   else if(!requireAuth && currenUser) {
//     console.log('next 2')
//     next('/')
//   }
//   else {
//     console.log('next 3')
//     next()
//   }
// })

export default router