<script setup>
const count = 999
const sayHi = () => {
  console.log(`我是子组件`)
}

defineExpose({
  count,
  sayHi
})
</script>
<template>
  <h1>我是用于测试的组件</h1>
  <div>{{ count }}</div>
  <div>{{ sayHi() }}</div>
</template>
<style scoped></style>