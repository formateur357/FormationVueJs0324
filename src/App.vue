<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MonPremierComposantVue/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import MonPremierComposantVue from './components/MonPremierComposant.vue';

export default {
  name: 'App',
  components: {
    MonPremierComposantVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
