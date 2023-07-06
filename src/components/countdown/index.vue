<template>
  <div>
    <span>获取验证码({{ time }}s)</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// 接收父组件传递的值，用于控制组件的显示和隐藏
let props = defineProps(["flag"]);
let time = ref<number>(5);

// 监视父组件传递的值，当值发生改变时，执行回调函数
watch(
  () => props.flag,
  () => {
    // 开启定时器
    let timer = setInterval(() => {
      // 当time的值为0时，清除定时器
      if (time.value === 0) {
        clearInterval(timer);
        // 向父组件发送事件
        $emit("getFlag", false);
        // 重置time的值
        time.value = 5;
      } else {
        // time的值减1
        time.value--;
      }
    }, 1000);
  },
  { immediate: true }
);

let $emit = defineEmits(["getFlag"]);
</script>

<style scoped></style>
