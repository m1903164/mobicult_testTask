<script setup>
import {ref, onMounted} from "vue"

import AddEditPageTemplate from '@/components/AddEditPageTemplate.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = ref('')
const buttonTitle = ref()

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
  >
    <el-form>
      <el-form-item label="Название">
        <el-input/>
      </el-form-item>
      <el-form-item label="Описание">
        <el-input/>
      </el-form-item>
    </el-form>
  </AddEditPageTemplate>
</template>