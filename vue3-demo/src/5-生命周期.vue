<script setup>
import { onMounted } from 'vue';
// beforeCreate 和 created 的相关代码
// 放在setup中执行
const getList = () => {
  setTimeout(() => {
    console.log('模拟发送请求，获取数据')
  }, 1000)
}
// 一进入页面的请求,
getList()

// 如果有些代码需要在mounted生命周期中执行
onMounted(() => {
  console.log('mounted生命周期函数1')
})

// 写成函数的调用方式，可以调用多次，并不会冲突，而是按照顺序依次执行
onMounted(() => {
    console.log('mounted生命周期函数2')
})
</script>
<template>
  <div></div>
</template>
<style scoped></style>