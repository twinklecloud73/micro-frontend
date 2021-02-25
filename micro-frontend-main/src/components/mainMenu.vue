<template>
  <div class="main-menu-wrap">
    <div class="main-menu-item" :class="{'active': selectedKey === item.key}"
         :key="item.key"
         v-for="item in menuList"
         @click="changeRoute(item.path, item.key)">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import {menuList} from "@/constants/mainMenu.js"

export default {
  data() {
    return {
      menuList,
      selectedKey: menuList[0].key,
    }
  },
  methods: {
    changeRoute(path, key) {
      this.selectedKey = key
      this.$router.replace(path).catch(err => err)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-menu-wrap
  width 100%
  height 45px
  background #2a9eff
  display flex
  align-items center
  justify-content flex-end

  .main-menu-item
    margin-right 10px
    padding 5px 18px
    cursor pointer
    font-size 14px
    color white

    &:hover,&.active
      background white
      border-radius 20px
      color #2a9eff

    &:last-child
      margin-right 50px
</style>