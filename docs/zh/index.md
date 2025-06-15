---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RikkaHub"
  text: "一体化安卓AI助手"
  tagline: 快速集成各种AI模型
  image:
    src: /icon.png
    alt: RikkaHub
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 文档
      link: /zh/docs/basic/get-started

features:
  - title: 多提供商支持
    details: 支持基于OpenAI和Google协议的各种LLM提供商，支持自定义token和baseUrl
    icon: 💻
  - title: 原生开发
    details: 采用原生技术开发，启动速度极快，内存占用低
    icon: 🚀
  - title: 优雅设计
    details: 简洁的界面设计，基于Material You风格，支持预测性返回手势等现代功能
    icon: 🎨
  - title: 搜索集成
    details: 支持集成各种搜索API，提高LLM准确性
    icon: 🔍
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<div style="padding-top: 48px;">
  <h2>应用预览</h2>
  <AppCarousel />
</div>
