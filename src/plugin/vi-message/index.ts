import { h, render } from 'vue'
import Message from './index.vue'
const ViMessage = {
  name: 'ViMessage',
  list: [] as any[],
  num: 0,
  flag: false,
  //挂载div容器
  container: null as any,
  initContainer() {
    this.container = document.createElement('div')
    this.container.className = 'vi-message-container'
    document.body.appendChild(this.container)
    this.flag = true
  },
  closeAll() {
    // console.log(this.list);

    this.list.forEach((item: any) => {
      item.component.exposed.destroy()
    })
  },
  h(option: any) {
    if (!this.flag) this.initContainer()
    this.num++;
    option.id = this.num
    option.key= this.num
    let son = document.createElement('div')
    son.className = `vi-message-box boxIndex-${1000 + this.list.length}`
    this.container.appendChild(son)
    const item= h(Message, option)
    this.list.push(item)
    option.onClose = () => {
      son.style.display = 'none'
    }
    option.onDestroy = () => {
      this.container.contains(son) && this.container.removeChild(son)
      
      this.list.splice(this.list.indexOf(item), 1)
    }
    
    
    render(item, son)
  },
  message(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = option.type || 'info'
    this.h(option)
  },
  success(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = 'success'
    option.icon = option.icon || 'zhengquewancheng-yuankuang'
    this.h(option)
  },
  primary(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = 'primary'
    this.h(option)
  },
  error(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = 'error'
    option.icon = option.icon || 'cuowuguanbiquxiao-yuankuang'
    this.h(option)
  },
  warning(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = 'warning'
    option.icon = option.icon || 'jian-yuankuang'
    this.h(option)
  },
  info(option: any) {
    if (typeof option === 'string') {
      option = {
        message: option
      }
    }
    option.type = 'info'
    option.icon = option.icon || 'gantanhao-yuankuang'
    this.h(option)
  }
}
export default ViMessage