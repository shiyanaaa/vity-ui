// import type { App } from 'vue'
// import ViIcon from './vi-icon/index.vue'
import iconName from '@/assets/fonts/iconfontName.js'

// // 使用install方法，在app.use挂载
// ViIcon.install = (app: App) => {
//   app.component(ViIcon.name as string, ViIcon)
// }

// export default ViIcon
export default {
  getAllIconList(){
    return iconName.glyphs;
  }
}
