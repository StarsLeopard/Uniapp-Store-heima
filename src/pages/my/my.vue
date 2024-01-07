<script setup lang="ts">
import { ref } from 'vue'
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'
// console.log('aaaaaaa', useMemberStore)

const memberStore = useMemberStore()

const test = ref()
// uni.request({
//   url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
//   data: {
//     text: 'uni.request',
//   },
//   header: {
//     'custom-header': 'hello', //自定义请求头信息
//   },
//   success: (res) => {
//     console.log(res.data)
//     // text.value = 'request success'
//   },
// })
const getData = async () => {
  const res = await http<string[]>({
    url: '/home/banner',
    method: 'GET',
    success: (res) => {
      console.log('aaaa', res.data)
      // text.value = 'request success'
    },
  })
  console.log('res', res.result)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '23235',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain type="warn">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
=
