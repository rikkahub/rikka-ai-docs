---
# Download
---

Download RikkaHub

<script setup lang="ts">
import { ref } from 'vue'
import markdownit from 'markdown-it'
const md = markdownit()

const version = ref(null)
fetch('https://updates.rikka-ai.com/')
    .then(res => res.json())
    .then(data => {
        version.value = data
    })

const content = ref('haha')
</script>

<div v-if="version">
  <h2>{{ version.version }}</h2>
  <div v-html="md.render(version.changelog)" class="changelog"/>
  <ul>
    <li v-for="item in version.downloads" :key="item.name">
      <a :href="item.url" :download="item.name">
        {{ item.name }}
      </a>
      <span v-if="item.size">
          ({{ item.size }})
      </span>
    </li>
  </ul>
</div>
<div v-else>
  Getting latest version...
</div>

<style scoped>
.changelog {
  background: var(--vp-custom-block-info-bg);
  padding: 10px 16px;
  border-radius: 5px;
}
</style>
