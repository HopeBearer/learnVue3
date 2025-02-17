<!-- setup -->
 <!-- 
   1. 执行时机比beforeCreate更早
   2. setup函数中，获取不到this (undefined)
   3. 数据 和 函数，需要在 setup 最后 return，才能在模板中使用
   4. 可以通过语法糖简化代码
 -->



<!-- <script>
export default {
  setup() {
    const message = 'hello Vue3'
    console.log("setup函数")
    console.log(this)
    function sayHello() {
      console.log(this, "执行sayHello")
    }
    return { message,
      sayHello
     }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
};
</script> -->

<!-- 语法糖 -->
<script setup>
const message = 'Hello, Vue3'
const sayHello = () => {
  console.log(message)
}

</script>


<template>
  <h1>我是父组件</h1>
  <h2>{{ message }}</h2>
  <h3>{{ sayHello() }}</h3>
</template>

<style></style>