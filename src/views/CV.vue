<template>
  <div class="cv-page">
    <h1>Curriculum Vitae</h1>
    <el-divider />

    <section class="section">
      <h2>Education</h2>
      <el-timeline>
        <el-timeline-item timestamp="2026 - Present" placement="top">
          <el-card>
            <div class="education-card">
              <img :src="UNCLogo" alt="UNC Logo" class="education-logo" />
              <div class="education-info">
                <h4>University of North Carolina at Chapel Hill</h4>
                <p>M.S. in Data Science</p>
                <p>Location: Chapel Hill, NC, USA</p>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022 - 2026" placement="top">
          <el-card>
            <div class="education-card">
              <img :src="NJAULogo" alt="NJAU Logo" class="education-logo" />
              <div class="education-info">
                <h4>Nanjing Agricultural University</h4>
                <p>B.S. in Information Management and Information System</p>
                <p>Location: Nanjing, Jiangsu, China</p>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </section>

    <section class="section">
      <h2>Honors & Awards</h2>
      <el-table :data="awards" border stripe style="width: 950px" class="awards-table">
        <el-table-column prop="award" label="Award" width="500" />
        <el-table-column prop="institution" label="Institution" width="300" />
        <el-table-column prop="year" label="Year" width="150" />
      </el-table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UNCLogo from '@/assets/UNC.svg'
import NJAULogo from '@/assets/NJAU.webp'

const awards = ref([
  {
    award: 'Outstanding Graduate',
    institution: 'Nanjing Agricultural University',
    year: '2026'
  },
  {
    award: 'Merit Student Scholarship',
    institution: 'Nanjing Agricultural University',
    year: '2026'
  },
  {
    award: 'Third Prize, the 2025 (18th) Chinese Collegiate Computing Competition',
    institution: 'Ministry of Education, China',
    year: '2025'
  }
])
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
  width: 1000px;
}

.education-card {
  display: flex;
  align-items: center;
  gap: 20px;
}

.education-logo {
  width: 220px;
  height: 100%;
  object-fit: contain;
  flex-shrink: 0;
}

.education-info {
  flex: 1;
}

.education-info h4 {
  margin: 0 0 10px 0;
}

.education-info p {
  margin: 5px 0;
}

.awards-table {
  margin-left: 50px;  /* 表格左边距 */
}
</style>
