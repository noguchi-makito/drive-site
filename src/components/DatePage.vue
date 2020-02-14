<template>
  <div class="column_2">
    <!-- サイドバー部分コンポーネント -->
    <sidebar></sidebar>

    <div class="content">
      <ul class="content__date">
        <li class="content__date__list">
          <img src="../assets/img/test.jpg" alt="保存画像1" />
        </li>
        <li class="content__date__list">
          <img src="../assets/img/test2.jpg" alt="保存画像2" />
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
  beforeMount: function() {
    if (this.$route.query.auth !== "authenticated") {
      this.$router.push({
        name: "Login",
        query: { next: "DatePage" }
      });
    }
  },
  data() {
    return {};
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
