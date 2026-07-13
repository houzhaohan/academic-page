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
            <p>I graduated from Nanjing Agricultural University as an outstanding student.</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </section>
    
    <section class="section">
      <h2>Motto</h2>
      <el-card shadow="hover">
        “ 90% of ML is data wrangling. The other 10% is blaming the random seed. ”
        <br>
        <svg ref="signatureSvg" viewBox="0 0 232.31 62.79" xmlns="http://www.w3.org/2000/svg" class="motto-signature">
          <path class="signature-path" d="M.5,15.13s.91,2.06,4.8.61S41.57,4,49.64,5.45-9.82,59.51,2.63,54.29s41.3-14.9,45.03-15.01"/>
          <path class="signature-path" d="M60.84,5.31c.23-.01,1.14-.13.46,1.43s-15.92,39.39-15.92,39.39c0,0,9.1-11.54,12.27-11.96s-3.47,8.84.3,8.76,8.46-5.18,8.46-5.18"/>
          <path class="signature-path" d="M74.02,34.94s-3.35-8.3-8.91,6.48c0,0,1.03,4.72,10.74-8.08,0,0-8.19,14.82,4.11,3.35,0,0,2.48-1.56,3.58-4.08,0,0-7.01,11.62,1.52,5.68s-2.7-5.64-3.5-4.95"/>
          <path class="signature-path" d="M102.46,12.63c1.11.83-12.71,26-11.83,28.29,0,0,10.8-13.91,9.83-6.4s.03,4.29,8.8-1.54"/>
          <path class="signature-path" d="M114.63,31.49s-1.11-4.75-6.4,2.18.46,7.13,7.71-2.58c0,0-8.29,14.54,6.17.11,0,0-.29,3.6-1.71,5.89,0,0,8.54-9.51,7.77-4.17s.97,6.14,5.6,3.94"/>
          <path class="signature-path" d="M142.44,28.23c1.33,1.26.34,3.66,37.87-9.07"/>
          <path class="signature-path" d="M160.04,4.61c1.9,1.68-11.09,32.92-10.44,34.04"/>
          <path class="signature-path" d="M181.3.5c1.41.95-21.18,58.32-19.92,61.79,0,0,.57-1.45,1.87-2.21"/>
          <path class="signature-path" d="M181.99,24.73s-8.15,9.94-.99,8,3.31-12.75,3.28-8.51,4.65,2.11,6.55.51c0,0-5.37,13.29,2.82,4.55,0,0,5.14-4.11,4.88-5.05s-5.56,13.04,6.63,6.22,25.41-5.94,26.67-5.71"/>
        </svg>
        <br>
      </el-card>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Monitor, ChatDotRound, Picture } from '@element-plus/icons-vue'

const signatureSvg = ref(null)

async function animateSignature() {
  if (!signatureSvg.value) return
  const paths = signatureSvg.value.querySelectorAll('.signature-path')
  
  for (const path of paths) {
    const len = path.getTotalLength()
    path.style.visibility = 'visible'
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    path.getBoundingClientRect()
    await new Promise((resolve) => {
      path.style.transition = `stroke-dashoffset ${len / 100}s linear`
      path.style.strokeDashoffset = 0
      path.addEventListener('transitionend', resolve, { once: true })
    })
  }
  
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  for (const path of paths) {
    const len = path.getTotalLength()
    path.style.transition = 'none'
    path.style.strokeDashoffset = len
    path.getBoundingClientRect()
  }
  
  animateSignature()
}

onMounted(() => {
  animateSignature()
})
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

.motto-signature {
  float: right;
  margin-right: 20px;
  height: 30px;
}

.signature-path {
  fill: none;
  stroke: #231815;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  visibility: hidden;
}
</style>
