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
        <input type="text" v-model="email" id="email" placeholder="アドレスを入力してください" />
      </li>
      <li class="login__password">
        <span class="login__password--icon">
          <font-awesome-icon icon="lock" />
        </span>
        <input type="password" v-model="password" id="password" placeholder="PASSWORDを入力してください。" />
      </li>
    </ul>
    <button type="button" class="button" @click="login">Login</button>
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
      let nextPage = this.$route.query.next;
      if (nextPage === undefined) {
        nextPage = "DatePage";
      }

      //メールアドレスとパスワードを設定
      let correctLoginEmail = "admin";
      let correctPassword = "password";

      let myEmail = document.getElementById("email").value;
      let myLoginPass = document.getElementById("password").value;

      if (myEmail === correctLoginEmail && myLoginPass === correctPassword) {
        // document.getElementById('loginResult').innerHTML = 'Login Success !'
        this.$router.push({ name: nextPage, query: { auth: "authenticated" } });
      } else {
        alert("メールアドレスかパスワードが違っています。");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
