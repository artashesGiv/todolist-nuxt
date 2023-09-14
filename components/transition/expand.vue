<template>
    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
        <slot />
    </transition>
</template>

<script setup lang="ts">
const enter = (element: HTMLElement) => {
    element.style.width = getComputedStyle(element).width
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'

    const height = getComputedStyle(element).height

    element.style.width = ''
    element.style.position = ''
    element.style.visibility = ''
    element.style.height = ''

    getComputedStyle(element).height

    requestAnimationFrame(() => {
        element.style.height = height
    })
}

const afterEnter = (element: HTMLElement) => {
    element.style.height = 'auto'
}

const leave = (element: HTMLElement) => {
    element.style.height = getComputedStyle(element).height

    getComputedStyle(element).height

    requestAnimationFrame(() => {
        element.style.height = ''
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
