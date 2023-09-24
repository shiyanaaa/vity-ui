import type { App } from 'vue'
import ViForm from './vi-form/index.vue'


// 使用install方法，在app.use挂载
ViForm.install = (app: App) => {
  app.component(ViForm.name as string, ViForm)
}

export default ViForm
