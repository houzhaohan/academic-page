<template>
  <div class="publications-page">
    <h1>Publications</h1>
    <el-divider />
    
    <p class="scholar-link">A complete list of publications can be found on <a class="scholar-anchor" @click="openLink('https://cloud.umami.is/q/HksL3b66u')">Google Scholar</a>.</p>
    
    <br>

    <section class="section">
      <template v-for="(pub, index) in paginatedPublications" :key="index">
        <h2 v-if="index === 0 || pub.year !== paginatedPublications[index - 1].year">{{ pub.year }}</h2>
        <el-card class="publication-card" shadow="hover">
          <h3>{{ pub.title }}</h3>
          <p class="authors" v-html="pub.authors"></p>
          <div class="venue-row">
            <p class="venue"><strong>{{ pub.venue }}</strong></p>
            <el-tag v-for="(tag, index) in pub.tags" :key="index" size="small" type="info">{{ tag }}</el-tag>
          </div>
          <div class="links">
            <el-button v-if="pub.pdf" type="primary" link @click="openLink(pub.pdf)">PDF</el-button>
            <el-button v-if="pub.doi" type="primary" link @click="openLink(pub.doi)">DOI</el-button>
            <el-button v-if="pub.code" type="primary" link @click="openLink(pub.code)">Code</el-button>
          </div>
        </el-card>
      </template>
    </section>

    <div class="pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { publications as publicationsData } from '@/data/publications'

const publications = ref(publicationsData)

const currentPage = ref(1)
const pageSize = ref(10)
const total = computed(() => publications.value.length)

const paginatedPublications = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return publications.value.slice(start, end)
})

const handleSizeChange = (val) => {
  pageSize.value = val
  currentPage.value = 1
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
h1 {
  color: #303133;
  font-size: 32px;
}

.scholar-link {
  color: #606266;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.6;
  margin: 16px 0;
}

.scholar-link a {
  color: #409eff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}

.scholar-link a:hover {
  color: #66b1ff;
  border-bottom-color: #66b1ff;
}

h2 {
  color: #409eff;
  font-size: 24px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
}

.publication-card {
  margin-bottom: 20px;
}

.publication-card h3 {
  color: #303133;
  font-size: 18px;
  margin-bottom: 10px;
}

.authors {
  color: #606266;
  margin-bottom: 8px;
}

.venue-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 6px;
}

.venue {
  color: #909399;
}

.links {
  display: flex;
  gap: 10px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
