<template>
    <section>
        <h1>completed task</h1>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'Completed Tasks',
    position: 3,
    icon: 'check-fill' as Icons,
})

useHead({
    title: 'Completed Tasks',
    meta: [{ name: 'description', content: 'Completed tasks pages' }],
})
</script>

<style scoped lang="scss"></style>
