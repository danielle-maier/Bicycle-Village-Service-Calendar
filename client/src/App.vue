<template>
  <div id="app">
  </div>
</template>

<script>
import Foot from './components/Foot'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar,
    Foot,
  }
}

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #232323;
}
</style>
