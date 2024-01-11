<script setup lang="ts">
import CustomNav from './components/CustomNav.vue'
import { ref } from 'vue'
import { getHomeSwiperAPI, getHomeCategoryAPI, getHomeMutliAPI } from '@/services/home'
import type { XtxGuessInstance } from '@/types/component'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const swiperData = ref<BannerItem[]>([])
const getBanner = async () => {
  let res = await getHomeSwiperAPI()
  swiperData.value = res.result
  console.log('res', res)
}

const cateData = ref<CategoryItem[]>([])
const getCategory = async () => {
  let res = await getHomeCategoryAPI()
  cateData.value = res.result
  console.log('res', res)
}

const mutliData = ref<HotItem[]>([])
const getMutli = async () => {
  let res = await getHomeMutliAPI()
  mutliData.value = res.result
  console.log('res', res)
}

onLoad(() => {
  getBanner()
  getCategory()
  getMutli()
})

const gessRef = ref<XtxGuessInstance>()
const scrolltolower = () => {
  console.log('触底事件触发')
  gessRef.value.getMore()
}
</script>

<template>
  <CustomNav />
  <scroll-view class="scroll" scroll-y @scrolltolower="scrolltolower">
    <XtxSwiper :banner-list="swiperData" />
    <CategoryPanel :list="cateData" />
    <HotPanel :list="mutliData" />
    <XtxGuess ref="gessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll {
  flex: 1;
}
</style>
