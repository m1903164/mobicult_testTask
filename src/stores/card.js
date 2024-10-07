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

  const createNewCard = (data) => {
    console.log(data)

    const newCard = {
      id: cardList.length + 1,
      text: data.cardTitle,
      description: data.cardDescription
    }

    cardList.push(newCard)
  }


  return {
    cardList,
    dataForTable,

    createNewCard
  }
})
