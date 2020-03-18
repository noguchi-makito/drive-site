<template>
  <div class="column_2">
    <!-- サイドバー部分コンポーネント -->
    <sidebar></sidebar>

    <div class="content">
      <ul class="content__date">
        <li class="content__date__list" v-on:click="isClick = !isClick">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像1" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick2 = !isClick2">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick2 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test2.jpg" alt="保存画像2" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick3 = !isClick3">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick3 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像3" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick = !isClick">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像1" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick2 = !isClick2">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick2 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test2.jpg" alt="保存画像2" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick3 = !isClick3">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick3 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像3" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick = !isClick">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像1" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick2 = !isClick2">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick2 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test2.jpg" alt="保存画像2" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick3 = !isClick3">
          <span
            class="content__date__list--icon"
            v-bind:class="{ active: isClick3 }"
          >
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像3" />
          </div>
        </li>
      </ul>
      <!-- テスト用のリスト -->
      <ul class="add_list">
        <li v-for="list in lists" :key="list" class="">
          {{ list }}
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
      isClick: false,
      isClick2: false,
      isClick3: false,
      counter: 0,
      lists: ["img1", "img2", "img3", "img4"]
    };
  },
  methods: {
    addList: function() {
      let foldeName = document.getElementById("addList").value;
      this.lists.push(foldeName);
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
</style>
