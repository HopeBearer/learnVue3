<script setup>
// const 计算属性 = computed(() => {
//   return 计算返回的解结果
// })
import { computed, ref } from 'vue'
const list = ref([1,2,3,45,76,7])
const computedList = computed(()=> {
  return list.value.filter(item => item > 2)
})
console.log(computedList.value)
const addFn = () => {
  list.value.push(2333)
}
</script>


<template>
  <div>
    <div>原始数据: {{ list }}</div>
    <div>计算后的数据：{{ computedList }}</div>
    <button @click="addFn" >修改数据</button>
  </div>
</template>


<style>

</style>