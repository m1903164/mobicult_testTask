<script setup>
import {ref, reactive} from "vue"

import ControlButton from './ControlButton.vue'
import { useRouter } from 'vue-router'
import { useCardStore } from "@/stores/card.js"

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
const cardStore = useCardStore()

const controlButtonsLayout = reactive({
  addButton: {
    title: 'Добавить',
    type: 'success',
    plain: false,
    disabled: false,
    click() {
      addButton()
    },
  },
  editButton: {
    title: 'Изменить',
    type: 'warning',
    plain: false,
    disabled: true,
    click() {
      editButton()
    },
  },
  deleteButton: {
    title: 'Удалить',
    type: 'danger',
    plain: false,
    disabled: true,
    click() {
      deleteButton()
    },
  },
})

const currentRow = ref({})

const rowSelected = (row) => {
  currentRow.value = row
  setControlButtonsPermissions()
}

const setControlButtonsPermissions = () => {
  controlButtonsLayout.editButton.disabled = false
  controlButtonsLayout.deleteButton.disabled = false

  switch (true) {
    case !currentRow.value || !(Object.keys(currentRow.value).length):
      controlButtonsLayout.editButton.disabled = true
      controlButtonsLayout.deleteButton.disabled = true
  }
}

const addButton = () => {
  router.push({ name: 'settingsAddCard' })
}
const editButton = () => {
  router.push({
    name: 'settingsEditCard',
    params: {
      id: currentRow.value.id,
    }
  })
}
const deleteButton = () => {
  cardStore.deleteCardById(currentRow.value.id)
}

</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h3 class="page-header__title">{{ props.pageTitle }}</h3>
      <div class="header-buttons">
        <ControlButton
            v-for="button in controlButtonsLayout"
            :title='button.title'
            :type='button.type'
            :plain='button.plain'
            :disabled='button.disabled'

            @click='button.click'
        />
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
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 511px) {
  .page-header {
    display: block;
  }

  .header-buttons {
    display: inline-flex;
    margin-bottom: 10px;
  }
}

</style>