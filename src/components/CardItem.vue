<script setup>
import { useCardStore } from "@/stores/card.js"

const cardStore = useCardStore()
</script>

<template>
  <div class="card">
    <el-card
        v-for="card in cardStore.dataForTable"
        class="card_container"
    >
      <p>{{ card.text }}</p>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  text-align: center;
}
</style>