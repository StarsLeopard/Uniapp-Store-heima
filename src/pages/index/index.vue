<script setup lang="ts">
import CustomNav from './components/CustomNav.vue'
import { ref } from 'vue'
import { getHomeSwiperAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'

const swiperData = ref<BannerItem[]>([])
const getBanner = async () => {
  let res = await getHomeSwiperAPI()
  swiperData.value = res.result
  console.log('res', res)
}

onLoad(() => {
  getBanner()
})
</script>

<template>
  <CustomNav />
  <XtxSwiper :banner-list="swiperData" />
</template>

<style lang="scss">
//
</style>
