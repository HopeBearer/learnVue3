import './assets/main.css'

// Vue2 new Vue() 创建了一个应用实例 => createApp()
// createRouter() createStore() 
// 将创建实例进行了封装，保证每个实例的独立封闭性
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
