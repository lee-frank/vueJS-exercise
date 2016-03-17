<template>
  <div class="Input">
    <h1>Fill out some data below!</h1>

    <form action="#">
      <div class="mdl-textfield mdl-js-textfield">
        <input type="text" :value="contact.name" v-model="name" class="mdl-textfield__input" id="name" />
        <label class="mdl-textfield__label" for="name"></label>
      </div>
    </form>

    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="updateName(name)">Update Name</button>
    <br /><br />
    <a v-link="'Welcome'"><button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Back</button></a>

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
