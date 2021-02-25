<template>
  <div id="app">
    <section>
      <section class="menu-wrap">
        <main-menu></main-menu>
      </section>
      <section class="container-wrap">
        <!--主应用-->
        <router-view v-show="$route.name"/>
        <!--子应用容器-->
        <section id="frame" v-show="!$route.name">

        </section>
      </section>
    </section>
  </div>
</template>

<script>
import MainMenu from "@/components/mainMenu"

export default {
  name: 'App',
  components: {MainMenu}
}
</script>

<style lang="stylus">
body
  margin 0
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
