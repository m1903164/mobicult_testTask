<script setup>
import { useCardStore } from '@/stores/card.js'

const cardStore = useCardStore()

const props = defineProps({
  pageTitle: {
    type: String,
    default: ''
  },
  buttonTitle: {
    type: String,
    default: ''
  },
})

defineEmits(['addCard', ])

const saveChanges = () => {
  cardStore.createNewCard()
}

</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h3 class="page-header__title">{{ pageTitle }}</h3>
      <div class="header-buttons">
        <el-button @click="saveChanges">{{ buttonTitle }}</el-button>
        <el-button>Назад</el-button>
      </div>
    </div>
    <div class="page-mainContainer">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.page-header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-mainContainer {
  padding: 20px;
}

</style>