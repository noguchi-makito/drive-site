<template>
  <div>
    <h2>タブ</h2>
    <div id="tabs" class="container">
      <div class="tabs">
        <a
          v-on:click="activetab = 1"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >タブ01</a
        >
        <a
          v-on:click="activetab = 2"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >タブ02</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >タブ03</a
        >
      </div>
      <div class="content">
        <div v-show="activetab === 1" class="tabcontent">コンテンツ01</div>
        <div v-show="activetab === 2" class="tabcontent">コンテンツ02</div>
        <div v-show="activetab === 3" class="tabcontent">コンテンツ03</div>
      </div>
    </div>
    <p>{{ timestamp }}</p>

    <button v-on:click="openModal">click</button>
    <showmodal v-show="showContent" v-on:from-child="closeModal"
      >slotからモーダルウィンドウへ</showmodal
    >

    <h3 class="vue-title">Simple</h3>
  </div>
</template>

<script>
import showmodal from "./parts/showmodal.vue"; //componentパス
export default {
  components: {
    showmodal
  }, //componentのファイル名
  created() {
    this.getNow();
  },
  data() {
    return {
      activetab: 1,
      timestamp: "",
      showContent: false,
      aaa: false
    };
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      this.timestamp = dateTime;
    },
    openModal: function() {
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
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
</style>
