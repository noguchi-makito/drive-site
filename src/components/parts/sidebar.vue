<template>
  <div class="sidebanner">
    <ul class="sidebanner__menu">
      <li class="sidebanner__menu__list" v-on:click="openModal">
        <span class="sidebanner__menu__list--icon"
          ><font-awesome-icon icon="folder"/></span
        >新規フォルダー
      </li>
      <li class="sidebanner__menu__list">
        <span class="sidebanner__menu__list--icon"
          ><font-awesome-icon icon="upload"/></span
        >アップロード
      </li>
      <li class="sidebanner__menu__list">
        <span class="sidebanner__menu__list--icon"
          ><font-awesome-icon icon="download"/></span
        >ダウンロード
      </li>
      <li class="sidebanner__menu__list">
        <span class="sidebanner__menu__list--icon"
          ><font-awesome-icon icon="trash-alt"/></span
        >削除
      </li>
    </ul>

    <!-- モーダルウィンドウコンポーネント -->
    <modal v-show="showContent" v-on:from-child="closeModal"></modal>
  </div>
</template>

<script>
import modal from "./modal";
export default {
  name: "DatePage",
  data() {
    return {
      showContent: false
    };
  },
  methods: {
    openModal: function() {
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
    }
  },
  components: {
    modal
  }
};
</script>

<style>
#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
