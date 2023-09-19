import type { App } from 'vue'
import ViButton from './vi-button/index.vue'

// 所有组件列表
const components = [
  ViButton
]

// 定义 install 方法
const install = (app: App): void => {
  // 遍历注册所有组件
  /*
    component.__name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.

    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(component.__name) 或 as语法(component.__name as string)
  */
  components.forEach(component => app.component(component.name as string, component))
}

export {
  ViButton
}

const VityUI = {
  install
}

export default VityUI
