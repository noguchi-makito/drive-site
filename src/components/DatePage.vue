<template>
  <div class="column_2">
    <!-- サイドバー部分コンポーネント -->
    <sidebar></sidebar>

    <div class="content">
      <!-- テスト用のリスト -->
      <ul class="content__date">
        <li
          v-for="list in lists"
          :key="list.name"
          class="content__date__list"
          @click="select=!select"
          v-bind:class="{select:select}"
        >
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
        <button @click="delet(index)">削除</button>
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
        { name: "img1", img: require("../assets/img/test.jpg") },
        { name: "img2", img: require("../assets/img/test2.jpg") },
        { name: "img3", img: require("../assets/img/test.jpg") }
      ],
      select: false
    };
  },
  methods: {
    addList() {
      let foldeName = document.getElementById("addList").value;
      if (foldeName == "") {
        alert("フォルダー名を入力指定ください");
      } else {
        this.lists.push({
          name: foldeName,
          img: require("../assets/img/folder.png")
        });
      }
    },
    delet(index) {
      this.lists.splice(index, 1);
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
