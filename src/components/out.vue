<template>
  <div>
    <h2>out组件</h2>
    <p>从on组件接收的值：{{msg}}</p>
  </div>
</template>

<script>
  import bus from '../assets/bus'
  export default {
    name: "on",
    data: ()=>{
      return ({
        msg: 'default'
      });
    },
    mounted: function () {
      var self = this;
      bus.$on('event', (msg) =>{
        self.msg = msg;
      })
    }
  }
</script>
