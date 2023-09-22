import type { App } from 'vue'
import ViSelect from './vi-select/index.vue'


// 使用install方法，在app.use挂载
ViSelect.install = (app: App) => {
  app.component(ViSelect.name as string, ViSelect)
}

export default ViSelect