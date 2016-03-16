<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  export default {
    store,
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello Vue!'
      }
    }
  }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>
