<template>
    <section class="add-task-page container">
        <ui-page-title title="Create your task" />
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'Add task',
    position: 4,
    icon: 'plus-fill' as Icons,
})

useHead({
    title: 'Add task',
})
</script>

<style scoped lang="scss"></style>
