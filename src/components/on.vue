<template>
    <div>
      <h2>on组件</h2>
      <button @click="sendMsg">向组件传值</button>
    </div>
</template>

<script>
  import bus from '../assets/bus'
    export default {
        name: "on",
        methods: {
          sendMsg: () =>
          {
            bus.$emit('event','this msg is from on')
          }
        }
    }
</script>

