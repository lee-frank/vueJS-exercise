<template>
  <a v-link="{ path: nextState }"><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Next - {{nextState}}</button></a>
</template>

<script>
export default {
  props: ['next-state']
}
</script>
