<template>
  <div>
    <div class="column_1">
      <!-- ログイン部分コンポーネント -->
      <login></login>
    </div>
  </div>
</template>

<script>
import login from "./parts/login.vue"; //componentパス
export default {
  components: {
    login
  } //componentのファイル名
};
</script>

<style></style>
