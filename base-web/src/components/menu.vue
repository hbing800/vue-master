<template>
  <div class="menu">
    <router-link to="test1">Test1</router-link>
    <router-link to="test2">Test2</router-link>
  </div>
</template>

<script>
  export default {
    name: 'va-menu',
    data () {
    return {
      msg: 'Welcome to Menu'
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .menu{
    border: 1px solid red;
    float: left;
    width: 30%;
    height: 500px;
  }
</style>
