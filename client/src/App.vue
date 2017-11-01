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
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #232323;
  background-color: #232323;
}
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
</style>
