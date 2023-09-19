<template>
    <div class="layout">
        <header-layout v-model="isCollapsed" />

        <main class="layout__wrapper">
            <menu-layout :is-collapsed="isCollapsed" />

            <div class="layout__content">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const isCollapsed = useState('isCollapsed', () => false)
</script>

<style scoped lang="scss">
.layout {
    height: calc(100% - $header-height);

    &__wrapper {
        display: flex;
        max-height: 100%;
        min-height: 100%;
    }

    &__content {
        background-color: $base;
        flex-grow: 1;
        padding: toRem(20);
    }
}
</style>
