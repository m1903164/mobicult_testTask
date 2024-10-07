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
})
</script>

<template>
  <div>
    <el-button
        :type="props.type"
        :plain="props.plain"
        :disabled="props.disabled"
    >
      {{props.title}}
    </el-button>
  </div>
</template>