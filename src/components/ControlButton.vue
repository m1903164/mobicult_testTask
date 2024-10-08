<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: ''
  },
  plain: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="btn_container">
    <el-button
        :type="props.type"
        :plain="props.plain"
        :disabled="props.disabled"
    >
      {{props.title}}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.btn_container {
  margin-right: 10px;

  &:last-child {
   margin-right: 0;
 }
}
</style>