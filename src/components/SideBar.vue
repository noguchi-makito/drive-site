<template>
  <div class="sidebanner">
    <ul class="sidebanner__menu">
      <li class="sidebanner__menu__list" v-on:click='showModal=!showModal'><span class="sidebanner__menu__list--icon"><font-awesome-icon icon="folder" /></span>新規フォルダー</li>
      <li class="sidebanner__menu__list"><span class="sidebanner__menu__list--icon"><font-awesome-icon icon="upload" /></span>アップロード</li>
      <li class="sidebanner__menu__list"><span class="sidebanner__menu__list--icon"><font-awesome-icon icon="download" /></span>ダウンロード</li>
      <li class="sidebanner__menu__list"><span class="sidebanner__menu__list--icon"><font-awesome-icon icon="trash-alt" /></span>削除</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DatePage'
  }
</script>


<style>

</style>
