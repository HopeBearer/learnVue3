<script setup>
import { ref, watch, reactive } from 'vue'
const count = ref(0)
const nickname = ref('张三')

const changeCount = () => {
  count.value++
}

const changeNickName = () => {
  nickname.value = '李四'
}
// 1. 监视单个数据的变化
// watch(ref对象,(newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// watch (count, (newValue, oldValue) => {
//   console.log(`count 从 ${oldValue} 变为了 ${newValue}`)
// }) 
// 2. 监视多个数据的变化
// 将前面的ref对象变为[ref对象1，ref对象2]
// watch([ref对象1, ref对象2],([newref对象1, newref对象2], [oldref对象1, oldref对象2]) => {})
// watch([count, nickname], ([newCount, newNickName], [oldCount, oldNickName]) => {
//   console.log(`count 从 ${oldCount} 变为了 ${newCount}`)
//   console.log(`nickname 从 ${oldNickName} 变为了 ${newNickName}`)
// })

// 3. 监视 reactive 定义的数据

// const state = reactive({
//   name: '庄庄',
//   age: 20
// })

// watch(() => state.name, (newValue, oldValue) => {
//   console.log(`name 从 ${oldValue} 变为了 ${newValue}`)
// })


// 4. 监听getter函数
const state = reactive({
  name: 'Alice',
  age: 20
});

watch(
  () => state.age > 18, // getter 函数
  (newValue, oldValue) => {
    console.log(`是否成年：${newValue}`)
    console.log(oldValue)
  },
  {
    deep: true
  }
);

state.age = 17; // 输出：是否成年：false
state.age = 19; // 输出：是否成年：true

</script>
<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changeNickName">改名字</button>
  <hr>
  <div>{{ state.age }}</div>
  <button @click="state.age++">过了一年...</button>
</template>
<style scoped></style>