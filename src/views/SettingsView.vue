<script setup>
import { onMounted } from 'vue'

import { useCardStore } from '@/stores/counter'

const cardStore = useCardStore()

onMounted(() => {
  console.log(cardStore.cardList)
})
</script>

<template>
  <div>Settings View</div>
  <el-button type="">bbtgbi</el-button>
</template>