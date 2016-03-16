<template>
  <div class="Welcome">
    <h1>Hi! Welcome to the site.</h1>
    <button-component :next-state="nextState"></Button>
  </div>
</template>

<script>
  import ButtonComponent from './Button.vue'

  export default {
    components: {
      ButtonComponent
    },
    data () {
      return {
        nextState: this.$route.nextState
      }
    }
  }
</script>
