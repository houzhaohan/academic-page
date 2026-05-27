<template>
  <div class="publications-page">
    <h1>Publications</h1>
    <el-divider />
    
    <p class="scholar-link">A complete list of publications can be found on <a class="scholar-anchor" @click="openLink('https://cloud.umami.is/q/HksL3b66u')">Google Scholar</a>.</p>
    
    <!-- 
    <section class="section">
      <h2>Journal Articles</h2>
      <el-card v-for="(pub, index) in journals" :key="index" class="publication-card" shadow="hover">
        <h3>{{ pub.title }}</h3>
        <p class="authors" v-html="pub.authors"></p>
        <p class="venue"><strong>{{ pub.venue }}</strong>, {{ pub.year }}</p>
        <div class="links">
          <el-button v-if="pub.pdf" type="primary" link @click="openLink(pub.pdf)">PDF</el-button>
          <el-button v-if="pub.doi" type="primary" link @click="openLink(pub.doi)">DOI</el-button>
          <el-button v-if="pub.code" type="primary" link @click="openLink(pub.code)">Code</el-button>
        </div>
      </el-card>
    </section>
    -->

    <section class="section">
      <h2>Conference Papers</h2>
      <el-card v-for="(pub, index) in conferences" :key="index" class="publication-card" shadow="hover">
        <h3>{{ pub.title }}</h3>
        <p class="authors" v-html="pub.authors"></p>
        <p class="venue"><strong>{{ pub.venue }}</strong>, {{ pub.year }}</p>
        <div class="links">
          <el-button v-if="pub.pdf" type="primary" link @click="openLink(pub.pdf)">PDF</el-button>
          <el-button v-if="pub.doi" type="primary" link @click="openLink(pub.doi)">DOI</el-button>
          <el-button v-if="pub.code" type="primary" link @click="openLink(pub.code)">Code</el-button>
        </div>
      </el-card>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const journals = ref([
  {
    title: 'Deep Learning for Natural Language Understanding: A Comprehensive Survey',
    authors: 'Your Name, Co-author A, Co-author B',
    venue: 'Journal of Artificial Intelligence Research',
    year: 2026,
    pdf: 'https://example.com/paper1.pdf',
    doi: 'https://ieeexplore.ieee.org/document/11256825',
    code: 'https://github.com/example/paper1'
  },
  {
    title: 'Advances in Multimodal Machine Learning',
    authors: 'Your Name, Co-author C',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    year: 2025,
    pdf: 'https://example.com/paper1.pdf',
    doi: 'https://ieeexplore.ieee.org/document/11256825',
    code: 'https://github.com/example/paper1'
  }
])

const conferences = ref([
  {
    title: 'Analysis of Martingale Strategy in Quantitative Trading Market Based on BiLSTM-Attention Model',
    authors: '<span style="color:blue;">Zhaohan Hou</span>',
    venue: '2025 IEEE 3rd International Conference on Sensors, Electronics and Computer Engineering (ICSECE 2025)',
    year: 2025,
    pdf: 'https://paper.houzhaohan.vip/3-1st.pdf',
    doi: 'https://ieeexplore.ieee.org/document/11256825',
    code: 'https://github.com/houzhaohan/Analysis-of-Martingale-Strategy-in-Quantitative-Trading-Market-Based-on-BiLSTM-Attention-Model'
  },
  {
    title: 'Discussion on the Determination Methods for Crack Width Collection Capacity of Highway Pavement',
    authors: 'Meixia Wang, Zhenwei Zhang, <span style="color:blue;">Zhaohan Hou</span>, Mingyang Jin, Ao Ji',
    venue: '2024 6th International Symposium on Architecture Research Frontiers and Ecological Environment (ARFEE 2024)',
    year: 2024,
    pdf: 'https://paper.houzhaohan.vip/2024EIConference.pdf',
    doi: 'https://doi.org/10.1051/e3sconf/202561801010',
    code: ''
  }
])

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

.venue {
  color: #909399;
  margin-bottom: 10px;
}

.links {
  display: flex;
  gap: 10px;
}
</style>
