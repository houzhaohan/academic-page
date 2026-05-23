<template>
  <div class="cv-page">
    <h1>Curriculum Vitae</h1>
    <el-divider />

    <section class="section">
      <h2>Education</h2>
      <el-timeline>
        <el-timeline-item timestamp="2026 - Present" placement="top">
          <el-card shadow="hover">
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
          <el-card shadow="hover">
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

    <section class="section">
      <h2>Experience</h2>
      <el-timeline>
        <el-timeline-item timestamp="October 2025 - June 2026" placement="top">
          <el-card shadow="hover">
            <div class="experience-card">
              <div class="experience-info">
                <h4>Volunteer Research Assistant</h4>
                <p>Nanjing Agricultural University, Department of Computer Science</p>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </section>

    <section class="section">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UNCLogo from '@/assets/UNC.svg'
import NJAULogo from '@/assets/NJAU.webp'
import BioIcon from '@/assets/cv/bio.svg'
import CIcon from '@/assets/cv/c.svg'
import CloudflareIcon from '@/assets/cv/cloudflare.svg'
import CSSIcon from '@/assets/cv/css.svg'
import GitIcon from '@/assets/cv/git.svg'
import HTMLIcon from '@/assets/cv/html.svg'
import IllustratorIcon from '@/assets/cv/illustrator.svg'
import JavaScriptIcon from '@/assets/cv/javascript.svg'
import LinuxIcon from '@/assets/cv/linux.svg'
import MySQLIcon from '@/assets/cv/mysql.svg'
import PhotoshopIcon from '@/assets/cv/photoshop.svg'
import PremiereProIcon from '@/assets/cv/premierepro.svg'
import PythonIcon from '@/assets/cv/python.svg'
import RIcon from '@/assets/cv/r.svg'
import SPSSIcon from '@/assets/cv/spss.svg'
import TorIcon from '@/assets/cv/tor.svg'
import VueIcon from '@/assets/cv/vue.svg'
import WiresharkIcon from '@/assets/cv/wireshark.svg'
import NginxIcon from '@/assets/cv/nginx.svg'
import PyTorchIcon from '@/assets/cv/pytorch.svg'
import SciKitIcon from '@/assets/cv/scikit-learn.svg'
import TensorFlowIcon from '@/assets/cv/tensorflow.svg'

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
  },
  {
    award: 'Honorable Mention, The Mathematical Contest in Modeling/The Interdisciplinary Contest in Modeling (MCM/ICM)',
    institution: 'Consortium for Mathematics and Its Applications, USA',
    year: '2025'
  }
])

const skills = ref([
  { name: 'C', icon: CIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'R', icon: RIcon },
  { name: 'HTML', icon: HTMLIcon },
  { name: 'CSS', icon: CSSIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Vue', icon: VueIcon },
  { name: 'Cloudflare', icon: CloudflareIcon },
  { name: 'Nginx', icon: NginxIcon },
  { name: 'MySQL', icon: MySQLIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Linux', icon: LinuxIcon },
  { name: 'scikit-learn', icon: SciKitIcon },
  { name: 'PyTorch', icon: PyTorchIcon },
  { name: 'TensorFlow', icon: TensorFlowIcon },
  { name: 'SPSS', icon: SPSSIcon },
  { name: 'Photoshop', icon: PhotoshopIcon },
  { name: 'Illustrator', icon: IllustratorIcon },
  { name: 'Premiere Pro', icon: PremiereProIcon },
  { name: 'Tor', icon: TorIcon },
  { name: 'Wireshark', icon: WiresharkIcon }
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

.experience-card {
  display: flex;
  align-items: center;
  gap: 20px;
}

.experience-info {
  flex: 1;
}

.experience-info h4 {
  margin: 0 0 10px 0;
}

.experience-info p {
  margin: 5px 0;
}

.awards-table {
  margin-left: 50px;  /* 表格左边距 */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 25px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-item:hover {
  background-color: #f5f7fa;
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.skill-name {
  font-size: 14px;
  color: #606266;
  text-align: center;
  font-weight: 500;
}
</style>
