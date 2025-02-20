<script setup>

// 父传子
// 1. 给子组件，添加属性的方式传值
// 2. 在子组件中，使用props接收父组件传过来的值
import SonCom from './components/SonCom.vue';

import { ref } from 'vue'
const money = ref(100)

const getMoney = () => {
  money.value += 1
}

const changeMoney = (value) => {
  money.value = value
}

</script>
<template>
  <h1>我是父组件 {{ money }} -- <button @click="getMoney">挣钱</button></h1>
  <SonCom message="我是父组件传过来的一条信息" @spendMoney="changeMoney" :money="money"></SonCom>
  
</template>
<style scoped></style>