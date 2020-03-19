<!--<template>
  <div>
    <h2>Список категорий</h2>
    <div :class="$style.wrapper">
      <div v-for="category in categories" :key="category.cSlug" :class="$style.block">
        <nuxt-link :to="`/category/${category.cSlug}`">
          <p>{{ category.cName }}</p>
          <img :src="category.cImage" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
-->
<template>
  <section>
    <h2 class="mb-4">Список компаний</h2>
    <!-- <pre>{{ companies }}</pre> -->
    <vx-card class="mb-5" v-for="item in companies" :key="item.id">
      <img class="company__img mb-5 mx-auto" :src="item.logo" alt="Логотип Компании">
      <nuxt-link class="company__title text-center block" :to="`companies/${item.slug}`">{{ item.name }}</nuxt-link>
      <div class="flex justify-between mb-2" v-for="props in item.props" :key="props.id">
        <p>{{ props.name }}</p>
        <p>
          {{ props.value }}&nbsp;
          <span>{{ props.units }}</span>
        </p>
      </div>

    </vx-card>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        companies: 'COMPANIES'
      })
    },
    methods: {
      ...mapActions([
        'GET_COMPANIES'
      ])
    },
    created() {
      this.GET_COMPANIES()
      .then(response => {
        console.log('Data Arrived')
      })
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
  .wrapper {
    display: flex;
  }

  .block {
    display: flex;
    flex-direction: column;
  }

</style>
