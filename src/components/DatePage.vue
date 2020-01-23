<template>
  <div class="column_2">
    <SideBar />
    <div class="content">
      <!-- モーダルウィンドウ -->
      <transition name="modal">
      <div class="modal" v-if='showModal'>
        <div class="modal__inner">
          <h3 class="modal__inner__title">NEW FOLDER</h3>
          <a class="modal__inner__close" href="#" v-on:click='click01'><font-awesome-icon icon="times" /></a>
          <div class="modal__inner__icon">
            <font-awesome-icon icon="folder" />
          </div>
          <ul class="modal__inner__list">
            <li>
              <input type="textarea" />
            </li>
            <li>
              <button>OK!</button>
            </li>
          </ul>
        </div>
      </div>
      </transition>
      <!-- /モーダルウィンドウ -->
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
import SideBar from './SideBar'
export default {
  name: 'DatePage',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    click01: function (ev) {
      this.showModal = false
      ev.preventDefault()
    }
  },
  components: {
    SideBar
  }
}

/* データページcss読み込み */
import '../assets/scss/date.scss'


</script>

<style lang="scss" scoped>

</style>
