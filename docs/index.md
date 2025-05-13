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
    - theme: alt
      text: Discord
      link: https://discord.gg/9weBqxe5c4

features:
  - title: Multi-Provider
    details: Supports various LLM providers based on OpenAI and Google protocols, supports custom tokens and baseUrl
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
---


<script setup lang="ts">
import AppCarousel from '/components/AppCarousel.vue'
</script>

<div style="padding-top: 48px;">
  <h2>App Preview</h2>
  <AppCarousel />
</div>
