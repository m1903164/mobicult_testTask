// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

import { defineStore } from "pinia"
import { reactive } from "vue"

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })


export const useCardStore = defineStore('card', () => {
  const cardList = reactive([
    {
      id: 0,
      text: 'Тестовая картока 1'
    },
    {
      id: 1,
      text: 'Тестовая картока 2'
    }
  ])


  return {
    cardList
  }
})
