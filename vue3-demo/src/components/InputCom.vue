<script setup>
// 报错是因为没有多词的文件名，可以通过添加name解决
// 为了避免在写一个script标签，vue3.3之后引入了一个新的宏函数 defineOptions

defineOptions({
  name: 'InputComponent'
})

// 接收父组件传过来的数据
defineProps({
  txt: String
})

// 发送给父组件的数据
const emit = defineEmits(['changeTxt'])

const changeTxt = (e) => {
  emit('changeTxt', e.target.value)
}

</script>
<template>
  <div>
    <h1>第一种方式 props和emit</h1>
    <input type="text" @input="changeTxt" :placeholder="txt">
  </div>
</template>
<style scoped></style>