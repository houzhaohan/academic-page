<template>
  <div class="research-page">
    <h1>Research</h1>
    <el-divider />
    
    <section class="section">
      <h2>Research Overview</h2>
      <p class="research-intro">
        My research focuses on machine learning, deep learning and their applications in real-world problems.
        Below are some of my key research projects and areas of interest.
      </p>
    </section>

    <section class="section">
      <h2>Research Projects</h2>
      
      <div v-for="(project, index) in projects" :key="index" class="research-item">
        <el-row :gutter="40" class="research-row">
          <el-col :span="10" class="research-image-col">
            <el-image
              :src="project.image"
              :alt="project.title"
              fit="cover"
              class="research-image"
              lazy
            >
              <template #error>
                <div class="image-error">
                  <el-icon :size="40"><Picture /></el-icon>
                </div>
              </template>
            </el-image>
          </el-col>
          <el-col :span="14" class="research-text-col">
            <h3>{{ project.title }}</h3>
            <p class="research-description">{{ project.description }}</p>
            <div class="research-tags">
              <el-tag
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="research-tag"
                type="info"
                size="small"
              >
                {{ tag }}
              </el-tag>
            </div>
            <div class="research-links">
              <el-button v-if="project.paper" type="primary" link @click="openLink(project.paper)">
                Paper
              </el-button>
              <el-button v-if="project.code" type="primary" link @click="openLink(project.code)">
                Code
              </el-button>
              <el-button v-if="project.demo" type="primary" link @click="openLink(project.demo)">
                Demo
              </el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider v-if="index < projects.length - 1" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Picture } from '@element-plus/icons-vue'
import clipImage from '@/assets/research/clip.webp'

const projects = ref([
  {
    title: 'Research and Application of CLIP Pre-training Model Based on Hash Algorithm in Cross-modal Retrieval and Localization of Farmland Insect Images',
    description: 'This project researches and develops an intelligent agricultural insect image retrieval and localization system based on B/S architecture, integrating CLIP and hash algorithms for efficient cross-modal retrieval via text descriptions. It visualizes pest locations and densities using scatter plots and heat maps from field camera data, supporting early warning, targeted control, model fine-tuning, and spatiotemporal analysis to promote precision and green agriculture.',
    tags: ['Graduation Design & Thesis', 'Fine Tune CLIP Pre-training Model', 'Image Retrieval'],
    image: clipImage,
    paper: '',
    code: '',
    demo: ''
  },
  {
    title: 'Integrating Unsupervised Language Model with Triplet Neural Networks for Protein Gene Ontology Prediction',
    description: 'The research is currently in progress...',
    tags: ['Gene Ontology', 'ESM-1b Coding', 'Triplet neural network'],
    image: '',
    paper: '',
    code: '',
    demo: ''
  }
])

const openLink = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
h1 {
  color: #303133;
  font-size: 32px;
}

h2 {
  color: #409eff;
  font-size: 24px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
}

.research-intro {
  color: #606266;
  font-size: 16px;
  line-height: 1.8;
}

.research-item {
  margin-bottom: 20px;
}

.research-row {
  align-items: stretch;
}

.research-image-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
}

.image-error {
  width: 100%;
  height: 250px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #c0c4cc;
}

.research-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.research-text-col h3 {
  color: #303133;
  font-size: 20px;
  margin-bottom: 15px;
}

.research-description {
  color: #606266;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 15px;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.research-tag {
  margin-right: 0;
}

.research-links {
  display: flex;
  gap: 10px;
}
</style>
