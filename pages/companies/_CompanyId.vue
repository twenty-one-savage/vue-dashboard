<template>
  <div>
    <img class="company__img mx-auto mb-5" :src="company.logo" :alt="`Логотип компании ` + company.name">
    <h1 class="company__title text-center">{{ company.name }}</h1>
    <div class="mb-5">
      <div class="flex justify-between mb-3" v-for="props in company.props" :key="props.id">
        <p>{{ props.name }}</p>
        <p>{{ props.value }}&nbsp;<span>{{ props.units }}</span></p>
      </div>
    </div>
    <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla explicabo ut, ducimus cum repellendus
      reiciendis accusamus possimus earum mollitia praesentium voluptatem nam et magnam eligendi eum voluptatibus
      molestias tenetur!</p>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    async asyncData({
      app,
      params,
      route,
      error
    }) {
      try {
        await app.store.dispatch('getCurrentCompany', {
          route
        })
      } catch (err) {
        console.log(err)
        return error({
          statusCode: 404,
          message: 'Категория не найдена или сервер не доступен'
        })
      }
    },
    computed: {
      ...mapState({
        company: 'currentCompany'
      })
    },
    head() {
      return {
        title: this.company.name,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.company.id
        }]
      }
    }
  }

</script>

<style lang="scss">
  @import '~~/assets/scss/vuexy/_variables.scss';

  .company__img {
    max-width: 250px;
  }

  .company__title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 60px;
    color: $primary;
  }

</style>
