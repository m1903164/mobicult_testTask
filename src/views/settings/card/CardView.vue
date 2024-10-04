<script setup>
import {onMounted, reactive, ref} from 'vue'

import { useCardStore } from '@/stores/card.js'
import PageTemplate from '@/components/PageTemplate.vue'

const cardStore = useCardStore()

const pageTitle = ref('Настрйоки карточек')

onMounted(() => {
})
</script>

<template>
  <PageTemplate
      :pageTitle="pageTitle"
      :tableData="cardStore.dataForTable"
  />
</template>