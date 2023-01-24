import "i18next"
import En from '@/i18n/config/en.json'
import Zh from '@/i18n/config/zh-cn.json'
import type { Ei18n } from '@/i18n'
declare module 'i18next' {
  interface CustomTypeOptions {
    lng: keyof typeof Ei18n
    debug: boolean
    resources: {
      en: typeof En,
      zh: typeof Zh
    }
  }
}