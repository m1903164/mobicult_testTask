import { defineStore } from "pinia"
import {computed, reactive} from "vue"

export const useCardStore = defineStore('card', () => {
  const cardList = reactive([
    {
      id: 0,
      text: 'Тестовая картока 1',
      description: 'description1'
    },
    {
      id: 1,
      text: 'Тестовая картока 2',
      description: 'description2'
    }
  ])

  const dataForTable = computed(() => {
    return cardList
  })


  return {
    cardList,
    dataForTable
  }
})
