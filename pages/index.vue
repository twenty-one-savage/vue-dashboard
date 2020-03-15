<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">
        dashboard
      </h1>
      <div class="flex flex-col">
        <nuxt-link class="mb-3" to="./testing">Testing Page!</nuxt-link>
        <nuxt-link to="./companies">Catalogue!</nuxt-link>
      </div>
      <Mycomponent />
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue"
import Mycomponent from "~/components/Mycomponent.vue"
export default {
  components: {
    AppLogo,
    Mycomponent
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
