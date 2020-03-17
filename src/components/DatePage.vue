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
      isClick3: false
    };
  },
  methods: {},
  components: {
    sidebar
  }
};
</script>

<style lang="scss" scoped></style>
