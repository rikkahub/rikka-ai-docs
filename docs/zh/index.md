---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RikkaHub"
  text: "全能Android AI助手"
  tagline: 快速接入各种AI模型
  image:
    src: /icon.png
    alt: RikkaHub
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 文档
      link: /docs/basic/get-started
    - theme: alt
      text: 加入群聊
      link: https://qm.qq.com/q/I8MSU0FkOu

features:
  - title: 多提供商支持
    details: 支持基于OpenAI, Google协议的各种供应商，支持自定义token, baseUrl
    icon: 💻
  - title: 原生应用
    details: 原生技术开发，启动速度飞快，内存占用低
    icon: 🚀
  - title: 优雅设计
    details: 简洁界面设计，基于Material You风格，并支持预测性返回等现代特性
    icon: 🎨
  - title: 搜索接入
    details: 支持接入各种搜索API, 提升LLM准确性
    icon: 🔍
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<AppCarousel />
