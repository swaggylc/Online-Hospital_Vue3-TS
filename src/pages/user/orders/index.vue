<template>
  <div v-if="$route.query.orderNo">
    <Detail></Detail>
  </div>
  <div v-else>
    <All></All>
  </div>
</template>

<script setup lang="ts">
import All from "./all/index.vue";
import Detail from "./detail/index.vue";

import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
</script>

<style scoped lang="scss"></style>
