<script setup>
import {ref, reactive, onMounted} from "vue"

import AddEditPageTemplate from '@/components/AddEditPageTemplate.vue'
import { useCardStore } from "@/stores/card.js"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const cardStore = useCardStore()

const controlButtonsLayout = reactive({
  saveButton: {
    title: 'Сохранить',
    type: 'primary',
    plain: true,
    click() {
      saveButton()
    },
  },
  backButton: {
    title: 'Назад',
    plain: true,
    click() {
      backButton()
    },
  }
})

const pageTitle = ref('')
const buttonTitle = ref()

const formData = reactive({
  cardId: 0,
  cardTitle: '',
  cardDescription: '',
})

const getDataById = () => {
  const cardId = parseInt(route.params.id)

  const card = cardStore.cardList.find(card => card.id === cardId)

  if (card) {
    formData.cardId = card.id
    formData.cardTitle = card.text
    formData.cardDescription = card.description
  }
}

const saveButton = () =>  {
  switch (route.name) {
    case 'settingsAddCard':
      cardStore.createNewCard(formData)
      break
    case 'settingsEditCard':
      cardStore.editCardById(formData)
      break
  }

  router.push({name: 'settingCard'})
}
const backButton = () => {
  router.go(-1)
}

onMounted(() => {
  switch(route.name) {
    case 'settingsAddCard':
      pageTitle.value = 'Добавить картчоку:'
      break
    case 'settingsEditCard':
      pageTitle.value = 'Редактировать картчоку:'
      getDataById()
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