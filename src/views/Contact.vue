<template>
  <div class="contact-page">
    <h1>Contact</h1>
    <el-divider />
    
    <el-row :gutter="40">
      <el-col :span="12">
        <section class="section">
          <h2>Contact Information</h2>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="Email">
              <el-icon><Message /></el-icon>
              houzh@unc.edu
            </el-descriptions-item>
            <el-descriptions-item label="Position">
              <el-icon><DataAnalysis /></el-icon>
              Master's Student
            </el-descriptions-item>
            <el-descriptions-item label="Office">
              <el-icon><OfficeBuilding /></el-icon>
              Baity Hill
            </el-descriptions-item>
            <el-descriptions-item label="Address">
              <el-icon><Location /></el-icon>
              University of North Carolina, Chapel Hill, NC
            </el-descriptions-item>
          </el-descriptions>
        </section>

        <section class="section">
          <h2>Office Hours</h2>
          <el-card>
            <p><strong>Monday:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Wednesday:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Friday:</strong> 8:00 AM - 5:00 PM</p>
            <p class="note">Or by appointment via email</p>
          </el-card>
        </section>
      </el-col>

      <el-col :span="12">
        <section class="section">
          <h2>Send Me Message</h2>
          <form
            @submit.prevent="handleSubmit"
            class="contact-form"
          >
            <label>
              Your email:
              <input type="email" v-model="formData.email" name="email" placeholder="Your email" required>
            </label>
            <label>
              Your message:
              <textarea v-model="formData.message" name="message" rows="9" placeholder="Your message" required></textarea>
            </label>
            <button type="submit">{{ loading ? 'Sending...' : 'Send' }}</button>
          </form>
        </section>
      </el-col>
    </el-row>

    <section class="section">
      <h2>Location</h2>
      <el-card class="map-card">
        <p class="map-service-note">
          Map powered by Google Maps
        </p>
        <div class="map-container">
          <iframe
            v-if="mapStatus !== 'error'"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCGdmL-h5V_pZe99dDA2TN0KJP9s0HPRVo&q=35.9033718,-79.048371"
            class="map-frame"
            frameborder="0"
            allowfullscreen
            @load="handleMapLoad"
            @error="handleMapError"
          ></iframe>
          <div v-if="mapStatus === 'loading'" class="map-overlay map-loading">
            Loading map...
          </div>
          <div v-if="mapStatus === 'error'" class="map-error-message">
            <el-icon><WarningFilled /></el-icon>
            Please check your network connection and ensure you can access Google Maps.
          </div>
        </div>
        <p class="map-note">
          <el-icon><Location /></el-icon>
          211 Manning Drive - Office Location, UNC Chapel Hill, School of Data Science and Society
        </p>
      </el-card>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Message, Phone, OfficeBuilding, Location, WarningFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const formData = ref({
  email: '',
  message: ''
})

const loading = ref(false)
const mapStatus = ref('loading') // 'loading', 'loaded', 'error'
let mapLoadTimer = null

const handleMapLoad = () => {
  clearTimeout(mapLoadTimer)
  mapStatus.value = 'loaded'
}

const handleMapError = () => {
  clearTimeout(mapLoadTimer)
  mapStatus.value = 'error'
}

onMounted(() => {
  mapLoadTimer = setTimeout(() => {
    if (mapStatus.value === 'loading') {
      mapStatus.value = 'error'
    }
  }, 15000)
})

onUnmounted(() => {
  if (mapLoadTimer) {
    clearTimeout(mapLoadTimer)
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    const response = await fetch('https://formspree.io/f/mojyvoeg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.value.email,
        message: formData.value.message
      })
    })
    
    if (response.ok) {
      ElMessage.success('Message sent successfully!')
      formData.value = { email: '', message: '' }
    } else {
      ElMessage.error('Failed to send message. Please try again.')
    }
  } catch (error) {
    ElMessage.error('Failed to send message. Please try again.')
  } finally {
    loading.value = false
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

.el-descriptions {
  margin-bottom: 20px;
}

.el-descriptions-item .el-icon {
  margin-right: 8px;
  color: #409eff;
}

.note {
  color: #909399;
  font-style: italic;
  margin-top: 10px;
}

.contact-form {
  background: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  color: #606266;
  font-size: 14px;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  margin-top: 8px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #409eff;
}

.contact-form textarea {
  resize: vertical;
  min-height: 170px;
}

.contact-form button {
  align-self: flex-start;
  padding: 10px 20px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.contact-form button:hover {
  background: #66b1ff;
}

.section h2 + .el-card {
  box-shadow: none;
}

.map-card {
  padding: 10px;
}

.map-container {
  position: relative;
  width: 100%;
  min-height: 400px;
}

.map-frame {
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 4px;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.map-note {
  margin-top: 12px;
  color: #606266;
  display: flex;
  align-items: center;
  gap: 6px;
}

.map-note .el-icon {
  color: #409eff;
}

.map-service-note {
  margin-right: 40px;
  color: #909399;
  font-style: italic;
  text-align: right;
}

.map-error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px 20px;
  background: #fef0f0;
  border: 1px solid #fbc4c4;
  border-radius: 4px;
  color: #f56c6c;
  font-size: 14px;
  min-height: 400px;
}

.map-error-message .el-icon {
  font-size: 20px;
}

.map-loading {
  background: rgba(245, 247, 250, 0.95);
  color: #909399;
  font-size: 14px;
}
</style>
