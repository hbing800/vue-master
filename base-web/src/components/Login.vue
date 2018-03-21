<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <button @click="sign">Sign in</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Login'
    }
  },
  methods: {
    sign: function () {
      localStorage.setItem('tocken','aaaaaaaaaaa')
      this.$router.push({ path: '/' })
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
  .login{
    text-align: center;
    margin-top: 300px;
  }
</style>
