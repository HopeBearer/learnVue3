<script setup>
// 子组件

// 由于写了 setup, 所以无法直接配置props选项
// 此处需要借助于'编译器宏'函数接受子组件传递的数据
const props = defineProps({
  message: String,
  money: Number
})
console.log(props)

const emit = defineEmits(['spendMoney'])
const spendMoney = () => {
  emit('spendMoney', props.money - 10)
}
</script>
<template>
  <div class="son">
    <h1>我是子组件</h1>
  <div>{{ message }}</div>
  <div>我有 {{ money }} 万元</div>
  <button @click="spendMoney">花钱</button>
</div>  
</template>
<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>