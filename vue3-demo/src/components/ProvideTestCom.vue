<script setup>
import { inject } from 'vue'

const theme = inject('theme')
console.log(theme.value)
const toggleTheme = inject('toggleTheme')
</script>
<template>
  <div>父组件传过来的： {{ theme }}</div>
  <button @click="toggleTheme">点击换色</button>
</template>
<style scoped></style>