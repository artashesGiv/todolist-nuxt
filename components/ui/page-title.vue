<template>
    <article class="page-title">
        <h1 class="page-title__text">{{ title }}</h1>
    </article>
</template>

<script setup lang="ts">
export type PageTitleProps = {
    title: string
}

defineProps<PageTitleProps>()
</script>

<style scoped lang="scss">
.page-title {
    height: toRem(120);
    background-color: $accent;
    border-radius: toRem(4);
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;

    &__text {
        font-size: toRem(36);
        line-height: toRem(46);
    }
}
</style>
