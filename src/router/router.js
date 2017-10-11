/**
 * Created by wang on 2017/5/24.
 */


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MovieHome from '../view/movie/Home.vue'
import Test from '../view/Test.vue'
import MovieSearch from '../components/Search'
import MovieSubject from '../view/movie/Subject'
//图书
import BookHome from '../view/book/Home.vue'
//音乐
import MusicHome from '../view/music/Home.vue'
//个人
import About from '../view/about/Index.vue'
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie/home', //首页重定向到Home
    },
    {
      path: '/movie/home',
      name: 'MovieHome',
      component: MovieHome,
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieSubject',
      component: MovieSubject,
      meta: {
        title: '电影详情'
      },
      beforeEnter: (to, from, next) => {
        console.log('小弟B：这是要去哪呀？', to)
        console.log('小弟A：我是来自', from)
        next() // 大哥：过去吧！
        document.title = to.meta.title
      }
    },
    {
      path: '/movie/search',
      name: 'MovieSearch',
      component: MovieSearch,
    },
    //测试
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    //图书
    {
      path: '/book/home',
      name: 'BookHome',
      component: BookHome,
    },
    //音乐
    {
      path: '/music/home',
      name: 'MusicHome',
      component: MusicHome,
    },
    //关于
    {
      path: '/about/index',
      name: 'About',
      component: About,
    },
  ],

})
