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
    <button type="button" class="button" @click="onlogin">Login</button>
  </div>
</template>

<script>
/* ログインページcss読み込み */
import "../../assets/scss/login.scss";
import superagent from "superagent";
import Router from "vue-router";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    //ログインボタンをクリックしたときの処理
    login: function() {
      let nextPage = this.$route.query.next;
      if (nextPage === undefined) {
        nextPage = "DatePage";
      }

      //メールアドレスとパスワードを設定
      let correctLoginEmail = "admin";
      let correctPassword = "password";

      //テキストボックスの値を変数に
      let myEmail = document.getElementById("email").value;
      let myLoginPass = document.getElementById("password").value;

      //テキストボックスの値が設定したメアドとパスワードと同じだった場合/dateに飛ばす。
      if (myEmail === correctLoginEmail && myLoginPass === correctPassword) {
        this.$router.push({ name: nextPage, query: { auth: "authenticated" } });
      }
      //違った場合アラート
      else {
        alert("メールアドレスかパスワードが違っています。");
      }
    },
    //
    onlogin: async function() {
      const url =
        "http://test-lb-1295246823.ap-northeast-1.elb.amazonaws.com:3000/v1/login/login-account";
      try {
        await superagent.post(url).send({
          id: Number(this.email),
          pass: Number(this.password)
        });
        const router = new Router({
          routes: [{ path: "/date" }]
        });
        router.push("date");
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
