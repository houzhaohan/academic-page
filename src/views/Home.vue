<template>
  <div class="home-page">
    <h1>Welcome to My Academic Page</h1>
    <el-divider />
    <section class="section">
      <h2>About Me</h2>
      <p>
        Welcome to my academic homepage.
        I’m <strong>Zhaohan Hou</strong> (侯兆晗 in Chinese), a Master’s student at the <strong>University of North Carolina at Chapel Hill</strong>. 
        My work lies at the intersection of AI4Science and machine learning, with particular interests in deep learning, natural language processing, and large language models.
      </p>
    </section>

    <section class="section">
      <h2>Research Interests</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Monitor /></el-icon>
                <span>Machine Learning</span>
              </div>
            </template>
            <p>Deep learning, reinforcement learning, and neural networks</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><ChatDotRound /></el-icon>
                <span>NLP</span>
              </div>
            </template>
            <p>Natural language understanding, text generation, and machine translation</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Tickets /></el-icon>
                <span>Large Language Model</span>
              </div>
            </template>
            <p>Model fine-tuning, model continues to train, model deployment</p>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section">
      <h2>News</h2>
      <el-timeline>
        <el-timeline-item timestamp="August 2026" placement="top">
          <el-card>
            <h4>Admitted</h4>
            <p>I will join UNC SDSS in August this year.</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="June 2026" placement="top">
          <el-card>
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
</style>
