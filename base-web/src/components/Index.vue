<template>
  <div id="index">
    <div class="wrapper">
      <va-nav></va-nav>
      <va-menu></va-menu>
      <va-contant></va-contant>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/nav'
import Menu from '@/components/menu'
import Contant from '@/components/contant'

  export default {
    name: 'index',
    created () {
    },
    components: {
      'va-nav': Nav,
      'va-menu': Menu,
      'va-contant': Contant
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
