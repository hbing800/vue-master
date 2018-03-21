<template>
  <div id="index">
    <va-nav></va-nav>
    <va-menu></va-menu>
    <va-contant></va-contant>
  </div>
</template>

<script>
import Nav from '@/components/nav'
import Menu from '@/components/menu'
import Contant from '@/components/contant'

  export default {
    name: 'index',
    components: {
      'va-nav': Nav,
      'va-menu': Menu,
      'va-contant': Contant
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
  .index{
    text-align: center;
    margin-top: 300px;
  }
</style>
