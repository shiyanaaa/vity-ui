import type { App } from 'vue'
import ViIcon from './vi-icon/index.vue'


// 使用install方法，在app.use挂载
ViIcon.install = (app: App) => {
  app.component(ViIcon.name as string, ViIcon)
}

export default ViIcon
