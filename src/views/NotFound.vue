<template>
  <div class="not-found-page">
    <el-result
      icon="warning"
      title="404 Not Found"
      sub-title="The page you are looking for does not exist."
    >
      <template #extra>
        <el-button type="primary" @click="goHome">Back to Home</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
</style>
