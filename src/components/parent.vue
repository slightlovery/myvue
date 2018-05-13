<template>
  <div>
    <on></on>
    <out></out>
  </div>
</template>

<script>
    import On from "./on";
    import Out from "./out"

    export default {
      components: {On, Out},
      name: "parent"
    }
</script>

<style scoped>

</style>
