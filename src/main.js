import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Welcome from './components/Welcome.vue'
import Input from './components/Input.vue'
import Final from './components/Final.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/Welcome': {
    component: Welcome
  },
  '/Input': {
    component: Input
  },
  '/Final': {
    component: Final
  }
})

router.redirect({
  '*': '/Welcome'
})

router.start(App, '#app')
