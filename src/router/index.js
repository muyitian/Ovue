import Vue from 'vue'
import Router from 'vue-router'



import Msite from '../pages/Msite/Msite.vue'
import Classification from '../pages/Classification/Classification.vue'
import Shopping from '../pages/Shopping/Shopping'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite' ,
    },
    {
      path:'/msite',
      component:Msite,
    },
    {
      path:'/classification',
      component:Classification,
    },
    {
      path:'/shopping',
      component:Shopping,
    },
    {
      path:'/profile',
      component:Profile,
    }
  ]
})
