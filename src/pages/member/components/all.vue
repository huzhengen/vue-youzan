<template>
  <div class="container" style="min-height: 597px;">
    <div
      class="block-list address-list section section-first js-no-webview-block"
      v-if="lists&&lists.length"
    >
      <a
        class="block-item js-address-item address-item"
        :class="{'address-item-default':list.isDefault}"
        @click="toEdit"
        v-for="list in lists"
        :key="list.id"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districName}}{{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div v-if="lists&&!lists.length">还没有地址，请添加</div>
    <div class="block stick-bottom-row center">
      <router-link to="form" class="btn btn-blue js-no-webview-block js-add-address-btn">新增地址</router-link>
    </div>
  </div>
</template>

<script>
import Address from "js/addressService.js";
export default {
  data() {
    return {
      lists: null
    };
  },
  created() {
    Address.list().then(res => {
      this.lists = res.data.data._req.lists;
    });
  },
  methods: {
    toEdit() {
      this.$router.push({ path: "/address/form" });
    }
  }
};
</script>

<style scoped>
</style>
