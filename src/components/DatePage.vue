<template>
  <div class="column_2">
    <!-- サイドバー部分コンポーネント -->
    <sidebar></sidebar>

    <div class="content">
      <!-- テスト用のリスト -->
      <ul class="content__date">
        <li v-for="list in lists" :key="list" class="content__date__list">
          <span class="content__date__list--icon">
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="imgbox">
            <p class="name">{{list.name}}</p>
            <img :src="list.img" />
          </div>
        </li>
      </ul>
      <div class="add_area">
        <input type="text" id="addList" />
        <input type="button" value="フォルダーを追加" @click="addList" />
      </div>
      <!-- /テスト用のリスト -->
    </div>
  </div>
</template>

<script>
import sidebar from "./parts/sidebar";
export default {
  name: "DatePage",
  data() {
    return {
      counter: 0,
      lists: [
        { name: "", img: require("../assets/img/test.jpg") },
        { name: "", img: require("../assets/img/test2.jpg") },
        { name: "", img: require("../assets/img/test.jpg") }
      ]
    };
  },
  methods: {
    addList: function() {
      let foldeName = document.getElementById("addList").value;
      this.lists.push({
        name: foldeName,
        img: require("../assets/img/folder.png")
      });
    }
  },
  components: {
    sidebar
  }
};
</script>

<style lang="scss" scoped>
.add_list {
  display: flex;
  justify-content: left;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  > li {
    height: 200px;
    min-width: 200px;
    border: solid 1px #ccc;
    margin: 5px;
  }
}
.add_area {
  margin-top: 40px;
}
</style>
