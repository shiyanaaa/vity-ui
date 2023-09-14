import type { App } from 'vue'
import LButton from './l-button.vue'

// 使用install方法，在app.use挂载
LButton.install = (app: App) => {
  app.component(LButton.__name as string, LButton)
}

export default LButton
