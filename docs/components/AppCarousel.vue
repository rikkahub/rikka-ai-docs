<script setup lang="ts">
import { ref, onMounted } from 'vue'
 import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, skipSnaps: true })
const currentSlide = ref(0)

const slides = [
  {
    img: '/assets/provider.png',
    alt: 'Provider设置',
    description: '多种模型提供商'
  },
  {
    img: '/assets/setting.png',
    alt: '设置界面',
    description: '简洁的设置界面'
  },
  {
    img: '/assets/chat.png',
    alt: '聊天页面',
    description: '功能丰富的聊天'
  },
  {
    img: '/assets/chat_img.png',
    alt: '图像理解能力',
    description: '强大的图像理解'
  }
]

const scrollTo = (index) => {
  emblaApi.value?.scrollTo(index)
}

const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

onMounted(() => {
  if (!emblaApi.value) return

  emblaApi.value.on('select', () => {
    currentSlide.value = emblaApi.value?.selectedScrollSnap() || 0
  })

  // 自动轮播
  const autoplay = setInterval(() => {
    if (emblaApi.value) emblaApi.value.scrollNext()
  }, 5000)

  return () => {
    clearInterval(autoplay)
  }
})
</script>

<template>
  <div class="carousel-container">
    <div class="embla" ref="emblaRef">
      <div class="embla__container">
        <div v-for="(slide, index) in slides" :key="index" class="embla__slide">
          <div class="slide-content">
            <img :src="slide.img" :alt="slide.alt" />
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="embla__prev" @click="scrollPrev">&#10094;</button>
    <button class="embla__next" @click="scrollNext">&#10095;</button>

    <div class="embla__dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="['embla__dot', { 'is-selected': index === currentSlide }]"
        @click="scrollTo(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  margin: 30px auto;
  overflow: hidden;
}

.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.slide-content {
  text-align: center;
  padding-bottom: 40px;
}

.slide-content img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.slide-content p {
  margin: 10px 0;
  font-weight: bold;
  font-size: 1.2em;
}

@media (min-width: 769px) {
  .embla__slide {
    flex: 0 0 25%; /* Display two slides on larger screens */
  }
  .slide-content {
    padding: 0 10px 40px; /* Add some padding between slides */
  }
}

.embla__prev,
.embla__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  border: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 18px;
  transition: background-color 0.3s;
  z-index: 2;
}

.embla__prev:hover,
.embla__next:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.embla__prev {
  left: 10px;
}

.embla__next {
  right: 10px;
}

.embla__dots {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.embla__dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.embla__dot.is-selected {
  background-color: white;
}

@media (max-width: 768px) {
  .embla__prev,
  .embla__next {
    padding: 10px;
    font-size: 14px;
  }
  
  .slide-content p {
    font-size: 1em;
  }
}
</style> 