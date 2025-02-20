<script setup>
import { provide, ref } from 'vue'
import ProvideTestCom from './components/ProvideTestCom.vue'

const theme = ref('dark')

// 父组件提供一个数据
provide('theme', theme)

provide('toggleTheme', () => {
  // 提供一个方法
  theme.value = theme.value === 'light' ? 'dark' : 'light'
})





</script>
<template>
  <div>
    <ProvideTestCom></ProvideTestCom>
  </div>
</template>
<style scoped></style>