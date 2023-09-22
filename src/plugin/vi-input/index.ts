import type { App } from 'vue'
import ViInput from './vi-input/index.vue'


// 使用install方法，在app.use挂载
ViInput.install = (app: App) => {
  app.component(ViInput.name as string, ViInput)
}

export default ViInput