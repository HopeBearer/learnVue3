<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
</script>
<template>
  <div>我是Son1Com组件- {{ counter.count }} - <button @click="counter.addCount">+</button></div>
</template>
<style scoped></style>
