<template>
  <div class="container">
    <div class="row">
      <h1 class="error__text mb-5" v-if="error.statusCode === 404">Страница не найдена</h1>
      <h1 class="error__text" v-else>Произошла ошибка</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="stylus" scoped>
  .error__text
    font-size 24px
    font-weight 700
    color #ff2800
    text-transform uppercase
</style>