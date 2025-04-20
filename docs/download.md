# 下载   

下载RikkaHub

<script setup lang="ts">
import { ref } from 'vue'
import markdownit from 'markdown-it'
const md = markdownit()

const version = ref(null)
fetch('https://rikkahub-updates.rerere.me/')
    .then(res => res.json())
    .then(data => {
        version.value = data
    })

const content = ref('haha')
</script>

<div v-if="version">
  <h2>{{ version.version }}</h2>
  <div v-html="md.render(version.changelog)" />
  <ul>
    <li v-for="item in version.downloads" :key="item.name">
      <a :href="item.url" :download="item.name">{{ item.name }}</a>
    </li>
  </ul>
</div>
<div v-else>
  正在获取最新版本...
</div>
