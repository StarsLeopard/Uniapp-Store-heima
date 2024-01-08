import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'

export const getHomeSwiperAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
