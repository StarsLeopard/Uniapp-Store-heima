import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(args: UniApp.RequestOptions) {
    if (!args.url.startsWith('http')) args.url = baseURL + args.url

    args.timeout = 10000

    args.header = {
      ...args.header,
      'source-client': 'miniapp',
    }

    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      args.header.Authorization = token
    }
  },
  // success(args: any) {
  //   // 请求成功后，修改code值为1
  //   args.data.code = 1
  // },
  // fail(err: UniApp.RequestOptions) {
  //   console.log('interceptor-fail', err)
  // },
  // complete(res: UniApp.RequestOptions) {
  //   console.log('interceptor-complete', res)
  // },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        resolve(res.data as Data<T>)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
