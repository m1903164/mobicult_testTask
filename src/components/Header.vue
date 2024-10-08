<template>
  <el-menu
      mode="horizontal"
  >
    <el-menu-item>
      <RouterLink to="/">Главная</RouterLink>
    </el-menu-item>
    <el-menu-item>
      <RouterLink to="/settings">Настройки</RouterLink>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
:deep(.el-menu-item a) {
  text-decoration: none;
}
</style>

