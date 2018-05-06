<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Keep calm and wait for this cool page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
