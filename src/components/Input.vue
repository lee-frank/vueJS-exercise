<template>
  <div class="Input">
    <h1>Fill out some data below!</h1>
    <label>Name</label>
    <input type="text" :value="contact.name" v-model="name"/>
    <button type="button" class="btn btn-primary-outline" @click="updateName(name)">Update Name</button>
    <br /><br />
    <a v-link="'Welcome'"><button type="button" class="btn btn-primary-outline">Back</button></a>

    <button-component :next-state="nextState"></Button>
  </div>
</template>

<script>
  import ButtonComponent from './Button.vue'
  import { updateName } from '../vueX/actions'

  export default {
    components: {
      ButtonComponent
    },
    methods: {
    // Call the Vuex updateName action
      updateName (name) {
        this.updateName({ name })
      }
    },
    data () {
      return {
        name: '',
        nextState: this.$route.nextState
      }
    },
    vuex: {
      getters: {
        contact: state => state.contact
      },
      actions: {
        updateName
      }
    }
  }
</script>
