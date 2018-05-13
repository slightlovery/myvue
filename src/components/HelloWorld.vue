<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <button v-on:click = "on">count++</button>
    <div>
      <button class="button1">
        <router-link to="echart">echart</router-link>
      </button>
    </div>
    <div class="text">this is the sass</div>
    <div id="sass">
      <div class="s1">
        s1111111111111111111
        <a href="">s2222222222222222</a>
        <p>s333333333333</p>
      </div>

    </div>
    <my-ele></my-ele>
  </div>

</template>

<script>
import store from "../store";
import {mapMutations, mapActions} from 'vuex'
import ele from './ele'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    MyEle: ele
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

<style lang="sass" scoped>
  @import "../assets/css/style"
  .button1 a
    font-size: 2rem
    text-decoration: none
  #sass
    border: 1px solid #000
    .s1
      color: #856441
      a
        color: aqua
      p
        color: beige
</style>
