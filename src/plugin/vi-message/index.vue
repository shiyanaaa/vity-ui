<template>
        <div :class="className" :style="style">
                <span class="vi-message-content">
                        <ViIcon v-if="props.icon" :name="props.icon"></ViIcon>
                        <span>{{ props.message }}</span>
                </span>
        </div>
</template>
    
<script setup lang='ts'>
import { computed, onMounted, ref, defineExpose } from 'vue';
import ViIcon from '../vi-icon/index.vue'
interface Props {
        type?: 'primary'|'success' | 'info' | 'warning' | 'error',
        icon?: string,
        message?: string,
        duration?: number,
        showClose?: boolean,
        onClose?: () => void,
        offset?: number,
        onDestroy?: () => void
}
const props=withDefaults(defineProps<Props>(),{
        type:'info',
        icon:'',
        message:'',
        duration:3000,
        showClose:false,
        onClose:()=>{},
        offset:10,
        onDestroy:()=>{}
})
const status = ref('enter')
const style = computed(() => {
        return {
                '--vi-message-marginTop': `${props.offset}px`
        }
})
const className = computed(() => {
        const nameList = ['vi-message']
        nameList.push(`vi-message-${status.value}`)
        props.type ? nameList.push(`vi-message-${props.type}`) : nameList.push(`vi-message-default`)
        return nameList
})
const timer=ref()
onMounted(() => {
        setTimeout(() => {
                status.value = 'leave'
        }, 50)
        timer.value=setTimeout(() => {
                destroy()
        }, props.duration - 500);
})
const destroy = () => {
        timer.value&&clearTimeout(timer.value)
        status.value = 'destroy'
        setTimeout(() => {
                props.onDestroy()
        }, 500);
}
defineExpose({
        destroy
})
</script>
    
<style lang="scss" scoped>
.vi-message {
        transition: all .3s;
        display: flex;
        margin-top: var(--vi-message-marginTop);
        --vi-message-height: 200px;
        --vi-message-width: fit-content;
        --vi-message-padding: 0 15px;
        padding: var(--vi-message-padding);
        max-height: var(--vi-message-height);
        width: var(--vi-message-width);
        max-width: 70vw;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: var(--vi-message-background);
        color: var(--vi-message-color);
        transform: translateY(-100%);
        box-sizing: border-box;

        .vi-message-content {
                display: flex;
                align-items: center;
                padding: 10px 0;
                width: 100%;
                word-break: break-all;

                & [class*=vi-icon]+span {
                        margin-left: 6px;
                }
        }


        &.vi-message-enter {
                opacity: 0;
                max-height: 0;
                transform: translateY(-100%);
                margin-top: 0;
        }

        &.vi-message-leave {
                max-height: var(--vi-message-height);
                opacity: 1;
                transform: translateY(0);
                margin-top: var(--vi-message-marginTop);
        }

        &.vi-message-destroy {
                opacity: 0;
                max-height: 0;
                transform: translateY(-100%);
                margin-top: 0;
        }

        @each $name, $color in $colors {
                &.vi-message-#{$name} {
                        --vi-message-background: var(--vi-color-light-#{$name}-6);
                        --vi-message-color: var(--vi-color-dark-#{$name}-2);
                }
        }
}
</style>