<script setup>
import { onMounted } from 'vue'

import { useCardStore } from '@/stores/counter'

const cardStore = useCardStore()

onMounted(() => {
  console.log(cardStore.cardList)
})
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h3 class="page-header__title">Настройки карточек</h3>
      <div class="btn-container">
          <el-button>Добавить</el-button>
          <el-button>Изменить</el-button>
          <el-button>Удалить</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.page-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
}

.page-header__title {
  font-size: 24px;
  font-weight: bold;
}

.btn-container {
  display: flex;
  gap: 10px;
}
</style>