import { defineStore } from "pinia"
import {computed, reactive} from "vue"

export const useCardStore = defineStore('card', () => {
  const cardList = reactive([
    {
      id: 1,
      text: 'Тестовая картока 1',
      description: 'description1'
    },
    {
      id: 2,
      text: 'Тестовая картока 2',
      description: 'description2'
    },
    {
      id: 3,
      text: 'Тестовая картока 2',
      description: 'description2'
    },
    {
      id: 4,
      text: 'Тестовая картока 2',
      description: 'description2'
    },
    {
      id: 5,
      text: 'Тестовая картока 2',
      description: 'description2'
    }
  ])

  const dataForTable = computed(() => {
    return cardList
  })

  const createNewCard = (data) => {
    const newCard = {
      id: cardList.length + 1,
      text: data.cardTitle,
      description: data.cardDescription
    }

    cardList.push(newCard)
  }

  const editCardById = (data) => {
    const card = cardList.find(card => card.id === data.cardId)

    if (card) {
      card.text = data.cardTitle
      card.description = data.cardDescription
    }
  }

  const deleteCardById = (id) => {
    const cardIndex = cardList.findIndex(card => card.id === id)

    if (cardIndex !== -1) {
      cardList.splice(cardIndex, 1)
    }
  }


  return {
    cardList,
    dataForTable,

    createNewCard,
    editCardById,
    deleteCardById
  }
})
