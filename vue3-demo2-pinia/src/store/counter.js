import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 声明数据 -- state
  const count = ref(0)

  const msg = ref('hello pinia')
  // 声明函数 -- actions 
  // 异步action 函数的写法和组件中获取异步数据的写法一致
  const  addCount = () => {
    count.value++
  }
  const subCount = () => {
    count.value--
  }
  // 声明基于数据派生的计算属性 getters 使用computed计算属性实现
  const dbCount = computed(() => count.value * 2)

  // 
  // 返回数据
  return {
    count,
    dbCount,
    addCount,
    subCount,
    msg
  }
}, {
  // persist: true
  // 有配置项，查官网
  persist: {
    key: 'l-counter',
    // 谁持久化
    pick: ['count']
  }
})