<template>
    <transition
        name="height"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
        <slot />
    </transition>
</template>

<script setup lang="ts">
const enter = (element: HTMLElement) => {
    const width = getComputedStyle(element).width
    element.style.transition = 'none'
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = ''
    element.style.width = width

    const height = getComputedStyle(element).height

    element.style.position = ''
    element.style.visibility = ''
    element.style.width = ''
    element.style.height = '0'

    getComputedStyle(element).height

    requestAnimationFrame(() => {
        element.style.transition = ''
        element.style.height = height
    })
}

const afterEnter = (element: HTMLElement) => {
    element.style.height = ''
}

const leave = (element: HTMLElement) => {
    element.style.height = getComputedStyle(element).height

    requestAnimationFrame(() => {
        element.style.height = '0'
    })
}
</script>

<style scoped>
* {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>
