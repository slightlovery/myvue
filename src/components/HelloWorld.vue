<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <button v-on:click = "on">count++</button>
  </div>
</template>

<script>
import store from "../store";
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    // ...mapMutations([
    //       'increment'
    //     ]),
    // ...mapMutations({
    //   add: 'increment'
    // }),
    ...mapActions([
      'increment'
    ]),
    ...mapActions({
      add: 'increment'
    }),
    on() {
      this.add(5)
    }
  }
}
</script>
