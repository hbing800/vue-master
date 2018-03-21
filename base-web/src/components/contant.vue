<template>
  <div class="contant">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'va-contant',
    data () {
    return {
      msg: 'Welcome to Contant'
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
  .contant{
    border: 1px solid red;
    float: left;
    width: 68%;
    height: 500px;
  }
</style>
