---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RikkaHub"
  text: "一体化 Android AI 助手"
  tagline: 快速集成各种 AI 模型
  image:
    src: /icon.png
    alt: RikkaHub
  actions:
    - theme: brand
      text: 下载
      link: /zh/download
    - theme: alt
      text: 文档
      link: /zh/docs/basic/get-started

features:
  - title: 多提供商
    details: 支持各种 LLM 提供商，包括 OpenAI、Google、Anthropic 等
    icon: 💻
  - title: 原生
    details: 采用原生技术开发，启动速度极快，内存占用低
    icon: 🚀
  - title: 优雅设计
    details: 简洁的界面设计，基于 Material You 风格，支持预测性返回手势等现代功能
    icon: 🎨
  - title: 搜索集成
    details: 支持集成各种搜索 API，提高 LLM 准确性
    icon: 🔍
  - title: MCP 支持
    details: 支持连接到 MCP 服务器以使用工具
    icon: 🔌
  - title: 自定义请求
    details: 允许您自定义 HTTP 请求头和正文，以获得对 LLM 的更多控制
    icon: 🔧
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<div style="padding-top: 48px;">
  <h2>应用预览</h2>
  <AppCarousel />
</div>
