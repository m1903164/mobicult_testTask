<script setup>
import ControllButton from '@/components/ControllButton.vue'

const props = defineProps({
  pageTitle: {
    type: String,
    default: ''
  },
  controlButtonsLayout: {
    type: Object,
    default: () => {},
  },
})

</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h3 class="page-header__title">{{ props.pageTitle }}</h3>
      <div class="header-buttons">
        <ControllButton
            v-for="button in controlButtonsLayout"
            :title='button.title'
            :type='button.type'
            :plain='button.plain'

            @click='button.click'
        />
      </div>
    </div>
    <div class="page-mainContainer">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.page-header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-mainContainer {
  padding: 20px;
}

</style>