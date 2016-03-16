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
    name: 'Welcome',
    component: Welcome,
    nextState: 'Input'
  },
  '/Input': {
    name: 'Input',
    component: Input,
    prevState: 'Welcome',
    nextState: 'Final'
  },
  '/Final': {
    name: 'Final',
    component: Final,
    nextState: 'Welcome'
  }
})

router.redirect({
  '*': '/Welcome'
})

router.start(App, '#app')
