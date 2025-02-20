<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
</script>
<template>
  <div>我是Son2Com组件 - {{ counter.count }} - <button @click="counter.subCount">-</button></div>
</template>
<style scoped></style>