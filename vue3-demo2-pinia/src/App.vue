<script setup>
import Son1Com from './components/Son1Com.vue'
import Son2Com from './components/Son2Com.vue'
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from './store/channel'
const counter = useCounterStore()
const channelStore = useChannelStore()
</script>
<template>
  <div>
    我是根组件 - {{ counter.count }} - {{ counter.dbCount }} - {{ counter.msg }}
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
  </div>
  <hr>
  <div>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<style scoped></style>