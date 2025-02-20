<script setup>
// 模板引用（可以获取DOM，也可以获取组件）
// 1. 调用ref函数，生成一个ref对象
// 2. 通过ref标识，进行绑定
// 3. 通过ref对象.value即可访问到绑定的元素(必须渲染完之后)

import { onMounted, ref } from 'vue'
const inpRef = ref(null)
// 打印时机太早
// console.log(inpRef.value)

// 生命周期钩子
onMounted (() => {
  console.log(inpRef.value)
  inpRef.value.focus()
})
const inpFocus = () => {
  inpRef.value.focus()
}

import TestCom from './components/TestCom.vue'

const testRef = ref(null)

const getCom = () => {
  testRef.value.sayHi()
}
</script>
<template>
  <div>
    <input ref="inpRef" type="text">
    <button @click="inpFocus">点击让输入框聚焦</button>
    <div>
      <TestCom ref="testRef"></TestCom>
      <button @click='getCom'>获取子组件中的属性和方法</button>
    </div>
  </div>
</template>
<style scoped></style>