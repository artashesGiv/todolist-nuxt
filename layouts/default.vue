<template>
    <div class="wrapper">
        <header class="header">
            <button @click="menuToggle">menu toggle</button>
            <!-- search-->
            <!-- actions-->
        </header>

        <transition name="transform-left">
            <aside ref="menu" v-if="isMenu" class="aside">
                <nav></nav>
            </aside>
        </transition>

        <main class="content">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenu = ref(true)
const menu = ref<HTMLElement | null>(null)

const menuToggle = () => {
    isMenu.value = !isMenu.value
}
</script>

<style scoped lang="scss">
$header-height: toRem(70);

.wrapper {
    position: relative;
    height: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-areas:
        'header'
        'content';
    grid-template-columns: 1fr;
    grid-template-rows: $header-height 1fr;
}

.header {
    background-color: $accent;
    grid-area: header;
}

.aside {
    background-color: $brand;
    position: absolute;
    top: $header-height;
    left: 0;
    bottom: 0;
    width: toRem(195);
}

.content {
    background-color: $base;
    grid-area: content;
    padding-left: 300px;
}
</style>
