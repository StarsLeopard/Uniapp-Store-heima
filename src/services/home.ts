import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem, GuessItem, PageParams } from '@/types/home'
import type { PageResult } from '@/types/global'

export const getHomeSwiperAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
    data: {},
  })
}

export const getHomeMutliAPI = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
    data: {},
  })
}

export const getHomeGuessAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
