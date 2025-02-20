import { defineStore } from "pinia"
import { ref } from 'vue'

// 定义store

// defineStore('仓库唯一标识', () => { ... })

// 选项式 API 写法 

// defineStore('counter', {
//   state: () => {
//     return {
//       count: 0
//     }
//   },
//   getters: {
    
//   },
//   actions: {
//   }
// })


// 组合式 API 写法 一般用这个与vue3语法和思想对应
defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})