<template>
  <div class="hello">
    <button>ログイン</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  date() {
    return {
      msg: 'welcome to your vue.js App'
    }
  },
  methods: {
    onClick:function() {
      alert('ログインします。')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
p.text {
  color: #ccc;
}
</style>
