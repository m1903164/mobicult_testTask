<script setup>
import {ref, reactive, onMounted} from "vue"

import AddEditPageTemplate from '@/components/AddEditPageTemplate.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = ref('')
const buttonTitle = ref()

const formData = reactive({
  cardId: 0,
  cardTitle: '',
  cardDescriotion: '',
})

const addCard = () => {
  cardStore.createNewCard(formData)
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

    @addCard="addCard"
  >
    <el-form>
      <el-form-item label="Название">
        <el-input v-model="formData.cardTitle"/>
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="formData.cardDescriotion"/>
      </el-form-item>
    </el-form>
  </AddEditPageTemplate>
</template>