<template>
  <div>
    <ul class="login">
      <li class="login__logo">
        <img src="../../assets/img/mtrad_logo.jpg" alt="ロゴ" width="100%" />
      </li>
      <li class="login__email">
        <span class="login__email--icon">
          <font-awesome-icon icon="envelope" />
        </span>
        <input type="text" v-model="email" placeholder="アドレスを入力してください" />
      </li>
      <li class="login__password">
        <span class="login__password--icon">
          <font-awesome-icon icon="lock" />
        </span>
        <input type="password" v-model="password" placeholder="PASSWORDを入力してください。" />
      </li>
    </ul>
    <button type="button" class="button" @click="login()">Login</button>
  </div>
</template>

<script>
/* ログインページcss読み込み */
import "../../assets/scss/login.scss";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      alert(
        "パスワードは" + this.password + "\n" + "メールアドレスは" + this.email
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
