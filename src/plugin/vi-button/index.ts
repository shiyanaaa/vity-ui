import type { App } from 'vue'
import ViButton from './vi-button/index.vue'


// 使用install方法，在app.use挂载
ViButton.install = (app: App) => {
  app.component(ViButton.name as string, ViButton)
}

export default ViButton
