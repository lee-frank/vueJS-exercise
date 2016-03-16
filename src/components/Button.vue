<template>
  <a v-link="{ path: nextState }"><button type="button" class="btn btn-primary-outline">Next - {{nextState}}</button></a>
</template>

<script>
export default {
  props: ['next-state']
}
</script>
