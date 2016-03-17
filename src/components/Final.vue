<template>
  <div class="Input">
    <h1>Thanks!</h1>
    {{ contact | json }}
  </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        contact: state => state.contact
      }
    }
  }
</script>
