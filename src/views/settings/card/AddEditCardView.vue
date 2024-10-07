<script setup>
import {ref, reactive, onMounted} from "vue"

import AddEditPageTemplate from '@/components/AddEditPageTemplate.vue'
import { useCardStore } from "@/stores/card.js"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const cardStore = useCardStore()

const controlButtonsLayout = reactive({
  addButton: {
    title: 'Сохранить',
    type: 'primary',
    plain: true,
    click: addButton
  },
  backButton: {
    title: 'Назад',
    plain: true,
    click: backButton
  }
})

const pageTitle = ref('')
const buttonTitle = ref()

const formData = reactive({
  cardId: 0,
  cardTitle: '',
  cardDescription: '',
})

function addButton() {
  cardStore.createNewCard(formData)

  router.push({name: 'settingCard'})
}
function backButton() {
  router.go(-1)
}

onMounted(() => {
  switch(true) {
    case route.name === 'settingsAddCard':
      pageTitle.value = 'Добавить картчоку:'
      buttonTitle.value = 'Добавить'
      break
    case route.name === 'settingsEditCard':
      pageTitle.value = 'Редактировать картчоку:'
      buttonTitle.value = 'Изменить'
      break
  }
})
</script>

<template>
  <AddEditPageTemplate
    :pageTitle="pageTitle"
    :buttonTitle = 'buttonTitle'
    :controlButtonsLayout="controlButtonsLayout"
  >
    <el-form>
      <el-form-item label="Название">
        <el-input v-model="formData.cardTitle"/>
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="formData.cardDescription"/>
      </el-form-item>
    </el-form>
  </AddEditPageTemplate>
</template>