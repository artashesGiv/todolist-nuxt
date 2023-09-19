<template>
    <section>
        <h1>all task</h1>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'All tasks',
    position: 2,
    icon: 'layout' as Icons,
})

useHead({
    title: 'All tasks',
    meta: [{ name: 'description', content: 'All tasks pages' }],
})
</script>

<style scoped lang="scss"></style>
