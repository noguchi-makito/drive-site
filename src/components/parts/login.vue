<template>
  <div>
    <ul class="login">
      <li class="login__logo">
        <img src="../../assets/img/mtrad_logo.jpg" alt="ロゴ" width="100%">
      </li>
      <li class="login__password">
        <span class="login__password--icon"><font-awesome-icon icon="lock" /></span>
        <input type="password"  placeholder="PASSWORDを入力してください。">
      </li>
      <li class="login__button">
        <router-link to="/date" class="button">
          Login
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
/* ログインページcss読み込み */
import '../../assets/scss/login.scss'
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
