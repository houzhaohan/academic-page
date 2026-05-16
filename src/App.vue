<template>
  <MainLayout />
</template>

<script setup>
import MainLayout from './components/MainLayout.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
  overflow-y: scroll;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

html, body {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
}

#app {
  min-height: 100vh;
}
</style>
