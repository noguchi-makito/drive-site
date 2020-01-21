<template>
  <div class="column_1">
    <LoginParts />
  </div>
</template>


<script>
import LoginParts from './LoginParts'//componentsの読み込み
export default {
  name: 'LoginPage',
  components: {
    LoginParts
  }//読み込むvueファイルの名前
}

</script>

<style>

</style>
