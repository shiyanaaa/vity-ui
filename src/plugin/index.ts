import type { App } from 'vue'
import ViButton from './vi-button/index.vue'
import ViIcon from './vi-icon/index.vue'
import ViSelect from './vi-select/index.vue'
import ViOption from './vi-select/vi-option.vue'
import ViInput from './vi-input/index.vue'
import ViForm from './vi-form/index.vue'
import ViFormItem from './vi-form-item/index.vue'
import ViContainer from './vi-container/container.vue'
import ViMain from './vi-container/main.vue'
import ViHeader from './vi-container/header.vue'
import ViAside from './vi-container/aside.vue'
import ViFooter from './vi-container/footer.vue'
import ViMessage from './vi-message/index'
import ViSwitch from './vi-switch/index.vue'
import ViMenu from './vi-menu/index.vue'
import ViTag from './vi-tag/index.vue'
import ViMenuItem from './vi-menu/item.vue'
import ViIconConfig from "./vi-icon/index"
import ViRadioGroup from './radio/vi-radio-group.vue'
import ViRadio from "./radio/vi-radio.vue"
import "./style.scss"
// 所有组件列表
const components = [
  ViButton,
  ViIcon,
  ViSelect,
  ViOption,
  ViInput,
  ViForm,
  ViFormItem,
  ViContainer,
  ViMain,
  ViHeader,
  ViAside,
  ViFooter,
  ViSwitch,
  ViMenu,
  ViMenuItem,
  ViTag,
  ViRadioGroup,
  ViRadio
  // ViMessage
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
  ViButton,
  ViIcon,
  ViSelect,
  ViOption,
  ViInput,
  ViForm,
  ViFormItem,
  ViContainer,
  ViMain,
  ViHeader,
  ViAside,
  ViFooter,
  ViMessage,
  ViSwitch,
  ViMenu,
  ViMenuItem,
  ViTag,
  ViIconConfig,
  ViRadioGroup,
  ViRadio
}

const VityUI = {
  install
}

export default VityUI
