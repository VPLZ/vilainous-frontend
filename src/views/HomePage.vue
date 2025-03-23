<script lang="ts" setup>
import HomeMenu from '@/components/HomeMenu.vue'
import { onMounted, ref } from 'vue'

const imageSources: string[] = [
  '/images/hades.jpg',
  '/images/hook.jpg',
  '/images/maleficient.png',
  '/images/medusa.jpg',
  '/images/cruela.jpg',
]

let index = 0
const isFading = ref(false)
const vilainImage = ref<HTMLImageElement | null>(null)
function setNextImage() {
  isFading.value = true
  setTimeout(() => {
    isFading.value = false
    index = (index + 1) % imageSources.length
    console.log(imageSources[index])
    if (vilainImage.value) vilainImage.value.src = imageSources[index]
    else console.log('Image null')
  }, 500)
}

onMounted(() => {
  console.log('hello')
  setInterval(setNextImage, 4400)
})
</script>

<template>
  <div class="column">
    <div class="left_part_menu">
      <h1>
        Vilainous:<br />
        The Card Game
      </h1>
      <HomeMenu />
    </div>
    <img
      ref="vilainImage"
      src="/images/cruela.jpg"
      alt="Vilain Image"
      :class="{ fading: isFading }"
    />
  </div>
</template>

<style>
.column {
  display: flex;
}
.left_part_menu * {
  min-width: 90%;
  margin: 10px 100px 10px 0;
}
img {
  transition: all 0.5s ease-in-out;
}
.fading {
  opacity: 0;
}
</style>
