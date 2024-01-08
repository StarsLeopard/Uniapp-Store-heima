<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const activeIndex = ref(0)
const changeSwiper: UniHelper.SwiperOnChange = (EventHandle) => {
  activeIndex.value = EventHandle.detail!.current
}

defineProps<{
  bannerList?: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      :current="activeIndex"
      @change="changeSwiper"
    >
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList"
        :key="index"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}
/* 轮播图 */
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
