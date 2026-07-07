<template>
  <div class="home-page">
    <h1>Welcome to My Academic Page</h1>
    <el-divider />
    <section class="section">
      <h2>About Me</h2>
      <p style="line-height: 1.4; margin-bottom: 10px;">
        Welcome to my academic homepage.
        I’m <strong>Zhaohan Hou</strong> (侯兆晗 in Chinese), a Master‘s student at the <strong>University of North Carolina at Chapel Hill</strong>. 
        My work lies at the intersection of Machine Learning and AI4Science, with particular interests in deep learning, natural language processing, and large language models.
      </p>
      <p style="line-height: 1.4;">
        I'm currently looking for <span style="color: red;">research collaboration</span> and <span style="color: red;">open-source project collaboration</span>.
        Feel free to reach out to me anytime.
      </p>
    </section>

    <section class="section">
      <h2>Research Interests</h2>
      <el-row :gutter="20" class="research-row">
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Monitor /></el-icon>
                <span>Machine Learning / Deep Learning / Computational Biology</span>
              </div>
            </template>
            <p>Deep learning architectures, Representation learning, Multimodal feature fusion</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><ChatDotRound /></el-icon>
                <span>Natural Language Processing / Biological Language Modeling</span>
              </div>
            </template>
            <p>Protein language models, Molecular sequence modeling, Self-supervised pre-training on biological sequences</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Tickets /></el-icon>
                <span>Large Language Models / Pre-trained Foundation Models</span>
              </div>
            </template>
            <p>Pre-training strategies, transfer learning, Model fine-tuning for biomedical downstream tasks</p>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section">
      <h2>News</h2>
      <el-timeline>
        <el-timeline-item timestamp="August 2026" placement="top">
          <el-card shadow="hover">
            <h4>Admitted</h4>
            <p>I will join UNC SDSS in August this year.</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="June 2026" placement="top">
          <el-card shadow="hover">
            <h4>Graduated</h4>
            <p>I will graduate from Nanjing Agricultural University in June this year.</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </section>
  </div>
</template>

<script setup>
import { Monitor, ChatDotRound, Picture } from '@element-plus/icons-vue'
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

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

.card-header .el-icon {
  font-size: 20px;
}

.research-row .el-card {
  height: 100%;
}

.research-row :deep(.el-card__body) {
  flex: 1;
}
</style>
