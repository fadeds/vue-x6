<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld from '@/components/HelloWorldcopy.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
<style scoped>
.home {
  height: 100%;
}
</style>
