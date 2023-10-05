import type { App } from 'vue'
import ViFormItem from './vi-form-item/index.vue'


// 使用install方法，在app.use挂载
ViFormItem.install = (app: App) => {
  app.component(ViFormItem.name as string, ViFormItem)
}

export default ViFormItem
