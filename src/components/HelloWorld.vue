<template>
  <div>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <p>{{checked}}</p>
      <input type="text" v-if="checked" />
      <input type="text" v-else disabled="disabled" />
      <div class="password_box">
        <input v-bind:type="inputType" id="password" class="input" />
        <span v-on:click="onClick" v-bind:class="iconType"></span>
      </div>
    </div>
    <button type="button" v-on:click="link">リンク</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      isChecked: false
    };
  },

  methods: {
    onClick: function() {
      this.isChecked = !this.isChecked;
    },
    link: function() {
      this.$router.push({ path: "/form" });
    }
  },
  computed: {
    inputType: function() {
      return this.isChecked ? "text" : "password";
    },
    iconType: function() {
      return this.isChecked ? "openIcon" : "closeIcon";
    }
  }
};
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
.active {
  background: #ccc;
}
.password_box {
  position: relative;
  width: 20%;
  margin: 0 auto;
}
.closeIcon,
.openIcon {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  line-height: 1.5;
  font-size: 16px;
  cursor: pointer;
}
.password {
  width: 100%;
}

.closeIcon::after {
  font-family: "Font Awesome 5 Free";
  content: "\f070";
}

.openIcon::after {
  font-family: "Font Awesome 5 Free";
  content: "\f06e";
}

.password_box input {
  width: 100%;
}
</style>
