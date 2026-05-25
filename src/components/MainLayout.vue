<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="header-content">
        <div class="header-left">
        <img :src="uncLogo" alt="UNC Logo" class="header-logo" />
      </div>
        <el-menu
          :default-active="activeIndex"
          class="header-menu"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/research">Research</el-menu-item>
          <el-menu-item index="/publications">Publications</el-menu-item>
          <el-menu-item index="/cv">CV</el-menu-item>
          <el-menu-item index="/contact">Contact</el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <el-container class="main-container">
      <el-aside width="300px" class="sidebar">
        <div class="sidebar-content">
          <div class="avatar-container">
            <el-avatar :size="150" :src="meImage" />
          </div>
          <h2 class="sidebar-name">Zhaohan Hou</h2>
          <p class="sidebar-bio">
            Code once, run everywhere —
            Write with care, scale with air.
            Build with thought, deploy with grace,
            Let logic linger in every space.
          </p>
          <div class="social-icons">
            <div class="social-item" @click="openLink('https://www.unc.edu')">
              <el-icon :size="24" class="icon"><School /></el-icon>
              <span class="icon-text link-text">University of North Carolina</span>
            </div>
            <div class="social-item">
              <el-icon :size="24" class="icon"><Location /></el-icon>
              <span class="icon-text">Chapel Hill, NC, USA</span>
            </div>
            <div class="social-item">
              <el-icon :size="24" class="icon"><Message /></el-icon>
              <span class="icon-text">me@houzhaohan.vip</span>
            </div>
            <div class="social-item" @click="openLink('https://blog.houzhaohan.vip')">
              <el-icon :size="24" class="icon"><Link /></el-icon>
              <span class="icon-text link-text">https://blog.houzhaohan.vip</span>
            </div>
            <div class="social-item" @click="openLink('https://github.com/houzhaohan')">
              <el-icon :size="24" class="icon"><Link /></el-icon>
              <span class="icon-text link-text">https://github.com/houzhaohan</span>
            </div>
            <div class="social-item" @click="openLink('https://linkedin.com/in/houzhaohan')">
              <el-icon :size="24" class="icon"><Link /></el-icon>
              <span class="icon-text link-text">https://linkedin.com/in/houzhaohan</span>
            </div>
          </div>
        </div>
      </el-aside>

      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>

    <el-footer class="footer">
      <p>&copy; 2026 Zhaohan Hou. All Rights Reserved.</p>
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { School, Message, Link, Star } from '@element-plus/icons-vue'
import uncLogo from '../assets/UNC.svg'
import meImage from '../assets/me.webp'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    activeIndex.value = newPath
  }
)

const handleSelect = (index) => {
  router.push(index)
  activeIndex.value = index
}

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}

.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-logo {
  height: 40px;
  width: auto;
}

.header-menu {
  border-bottom: none;
  justify-content: flex-end;
}

.main-container {
  margin-top: 60px;
}

.sidebar {
  background-color: #f5f7fa;
  border-right: 1px solid #e6e6e6;
  padding: 40px 20px;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
}

.sidebar-content {
  text-align: center;
}

.avatar-container {
  margin-bottom: 20px;
}

.sidebar-name {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 15px;
}

.sidebar-bio {
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-left: 6px;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon {
  color: #409eff;
  transition: color 0.3s;
}

.icon:hover {
  color: #66b1ff;
}

.icon-text {
  font-size: 14px;
  color: #606266;
}

.link-text {
  cursor: pointer;
  transition: color 0.3s;
}

.link-text:hover {
  color: #66b1ff;
  text-decoration: underline;
}

.main-content {
  margin-left: 300px;
  padding: 40px 40px 40px 40px;
  min-height: calc(100vh - 60px);
  background-color: #fff;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.footer p {
  color: #606266;
  font-size: 14px;
}
</style>
