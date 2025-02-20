<script setup>
// 报错是因为没有多词的文件名，可以通过添加name解决
// 为了避免在写一个script标签，vue3.3之后引入了一个新的宏函数 defineOptions

defineOptions({
  name: 'InputComponent'
})

import { defineModel } from 'vue'

const modelValue = defineModel()

</script>
<template>
  <div>
    <h1>第二种方式 defineModel</h1>
    <p>这种方式需要再配置文件中开启</p>
    <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
  </div>
</template>
<style scoped></style>