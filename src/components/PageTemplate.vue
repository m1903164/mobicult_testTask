<script setup>
import {ref, onMounted, computed} from "vue"

import { useRouter } from 'vue-router'

const props = defineProps({
  pageTitle: {
    type: String,
    default: ''
  },
  tableData: {
    type: Array,
    required: true
  }

})

const router = useRouter()

const isRowSelected = computed(() => {
  if(Object.keys(currentRow.value).length) return false

  return true
})

const currentRow = ref({})

const rowSelected = (row) => {
  currentRow.value = row

  console.log(currentRow.value)
}

const addCard = () => {
  router.push({ name: 'settingsAddCard' })
}

onMounted(() => {
  console.log(props.tableData)
})

</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h3 class="page-header__title">{{ props.pageTitle }}</h3>
      <div class="header-buttons">
        <el-button @click="addCard">Добавить</el-button>
        <el-button
            :disabled="isRowSelected"
        >
          Редактировать
        </el-button>
        <el-button
            :disabled="isRowSelected"
        >
          Удалить
        </el-button>
      </div>
    </div>
    <div class="page-mainContainer">
      <el-table
        :data="tableData"
        border
        empty-text="карточек нет"
        highlight-current-row

        @current-change='rowSelected'
      >
        <el-table-column prop="id" label="Id"/>
        <el-table-column prop="text" label="Текс"/>
        <el-table-column prop="description" label="Описание"/>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: azure;
  border-bottom: 1px solid black;
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>