<template>
  <div class="column_2">
    <!-- サイドバー部分コンポーネント -->
    <sidebar></sidebar>

    <div class="content">
      <ul class="content__date">
        <li class="content__date__list" v-on:click="isClick=!isClick">
          <span class="content__date__list--icon" v-bind:class="{active:isClick}">
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test.jpg" alt="保存画像1" />
          </div>
        </li>
        <li class="content__date__list" v-on:click="isClick2=!isClick2">
          <span class="content__date__list--icon" v-bind:class="{active:isClick2}">
            <font-awesome-icon icon="envelope" />
          </span>
          <div class="e-imgbox">
            <img src="../assets/img/test2.jpg" alt="保存画像2" />
          </div>
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像3" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像4" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像5" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像6" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像7" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像8" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像9" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像10" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像11" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像12" />
        </li>
      </ul>
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
      isClick2: false
    };
  },
  methods: {},
  components: {
    sidebar
  }
};

/* データページcss読み込み */
import "../assets/scss/date.scss";
</script>

<style lang="scss" scoped></style>
