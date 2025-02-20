<script setup>
import { ref } from 'vue'
import InputCom2 from './components/InputCom2.vue';
const txt = ref('请输入..')
const changeTxt = (value) => {
  txt.value = value
}

</script>
<template>
  <div>
    <InputCom2 v-model="txt" @changeTxt="changeTxt"></InputCom2>
    {{ txt }}
  </div>
  <hr>
</template>
<style scoped></style>