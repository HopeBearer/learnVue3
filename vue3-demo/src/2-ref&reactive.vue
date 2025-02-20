<script setup>
// reactive 接收一个对象类型的数据，返回一个响应式的对象
// import { reactive } from 'vue'
// const state = reactive({
//   count: 100
// })
// const setCount = () => {
//   state.count++
// }
// ref函数， 接收简单类型 或 复杂类型的数据， 返回一个响应式的对象
import { ref } from 'vue'
// js中访问数据要.value，在模板中不需要
const count = ref(0)
console.log(count.value)
const setCount = () => {
  count.value++
}
</script>


<template>
  <!-- <div>{{ state.count }}</div>
  <button @click="setCount">count++</button> -->
  <div>{{ count }}</div>
  <button @click="setCount">count++</button>
</template>

<style></style>