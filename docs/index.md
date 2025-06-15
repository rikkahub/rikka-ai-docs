---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RikkaHub"
  text: "All-in-one Android AI Assistant"
  tagline: Quickly integrate various AI models
  image:
    src: /icon.png
    alt: RikkaHub
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: Documentation
      link: /docs/basic/get-started

features:
  - title: Multi-Provider
    details: Supports various LLM providers, including OpenAI, Google, Anthropic, etc.
    icon: 💻
  - title: Native
    details: Developed with native technology, incredibly fast startup speed, low memory usage
    icon: 🚀
  - title: Elegant Design
    details: Simple interface design, based on Material You style, and supports modern features like predictive back gestures
    icon: 🎨
  - title: Search Integration
    details: Supports integrating various search APIs to improve LLM accuracy
    icon: 🔍
  - title: MCP Support
    details: Supports connecting to MCP servers to use tools
    icon: 🔌
  - title: Custom Request
    details: Allows you to customize the HTTP request headers and body to get more control over the LLM
    icon: 🔧
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<div style="padding-top: 48px;">
  <h2>App Preview</h2>
  <AppCarousel />
</div>
